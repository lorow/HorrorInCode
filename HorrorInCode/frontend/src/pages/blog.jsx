import React, { useEffect } from 'react';
import { rootTransition } from '../transitions';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BlogTile from '../components/BlogTile';
import { setBackgroundText, setVisualPageIndex } from '../actions/pageActions';
import { fetchBlogPosts } from '../actions/blogActions';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../history';

const BlogContainer = styled.main`
  width: 100vw;
  height: 100vh;
  z-index: 3;
  display: grid;
  grid-template-columns: minmax(10px, .13fr) 1fr;
  grid-template-rows: .2fr 1fr .2fr;

  grid-template-areas: "top top" "sidebard content" "footer footer";
`;

const BlogTilesList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  grid-area: content;
`;

export default function Blog(props) {
  const dispatch = useDispatch();
  const animVariants = rootTransition['blog'];
  const blogData = useSelector(state => state.blog);

  useEffect(() => {
    dispatch(setBackgroundText("BLOG"));
    dispatch(setVisualPageIndex("03"));
    dispatch(fetchBlogPosts(""))
  }, [dispatch])

  useEffect(() => {
    console.log(blogData)
  }, [blogData])

  return (
    <BlogContainer>
      <BlogTilesList variants={animVariants} animate="in" initial="initial" exit="out">
        {!blogData.isSingle &&
          blogData.data.map(
            blogPost => (
              <BlogTile
                key={blogPost.cursor}
                orderID={blogPost.node.id}
                date={blogPost.node.publishedDate}
                title={blogPost.node.title}
                desc={blogPost.node.description}
                tags={blogPost.node.tags}
                onClick={() => history.push(`/blog/${blogPost.node.id}`)}
              />
            )
          )
        }
      </BlogTilesList>

    </BlogContainer>
  )
}