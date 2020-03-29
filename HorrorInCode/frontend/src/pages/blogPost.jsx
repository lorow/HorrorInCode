import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { history } from '../history';
import { Tag } from '../components/tag';
import BackArrow from '../components/BackArrow';
import { fetchCompleteBlogPost } from '../actions/blogActions';
import { useDispatch, useSelector } from 'react-redux';

const Main = styled(motion.main)`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  z-index: 3;
  display: grid;
  position: relative;
  grid-template-columns: .2fr 1fr .18fr;
  grid-template-rows: .1fr auto;
  grid-template-areas: "nav nav nav" "left content right"; 
`;

const ArticleContainer = styled.article`
  margin-top: 50px;
  grid-area: content;
  display: flex;
  flex-direction: column;
  color: white;
`;

const ArticleTitle = styled.h1`
  font-size: calc(3rem + .5vw);
`;


const ArticleContent = styled.div`
  padding-left: 20px;
  padding-right: 10vw;

  font-size: calc(.9rem + .1vw);
  opacity: .8;
  padding-bottom: 20px;
`;

const ArticleFlexRow = styled.div`
  display: flex;
  flex-direction: row;

  @media(max-width: 621px){
    display: ${props => props.noMobile ? 'none' : 'block'};
  }
`;

const DateTile = styled.p`
font-size: 15px;
opacity: .8;
line-height: 36px;
margin-right: 20px;
`;

export default function BlogPost(props) {
  const { articleId } = useParams();
  const dispatch = useDispatch();

  const article = useSelector(state => state.blog);

  useEffect(() => {
    if (isNaN(articleId))
      history.goBack();
    else {
      // dispatch that single-download action
      dispatch(fetchCompleteBlogPost(articleId));
    }
  }, [articleId, dispatch])

  return (
    <Main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <ArticleContainer>
        <header>
          <ArticleFlexRow noMobile>
            <DateTile>
              {article.data.publishedDate}
            </DateTile>
            {article.data.tags &&
              article.data.tags.map(
                tag => <Tag>{tag.name}</Tag>
              )
            }
          </ArticleFlexRow>
          <ArticleFlexRow>
            <ArticleTitle>
              {article.data.title}
            </ArticleTitle>
            <BackArrow />
          </ArticleFlexRow>
        </header>
        <ArticleContent>
          {article.data.description}
        </ArticleContent>
      </ArticleContainer>
    </Main>
  )
}