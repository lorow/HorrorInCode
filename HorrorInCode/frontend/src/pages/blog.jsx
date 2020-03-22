import React, { useEffect } from 'react';
import styled from 'styled-components';
import BlogTile from '../components/BlogTile';
import { setBackgroundText, setVisualPageIndex } from '../actions/pageActions'
import { useDispatch } from 'react-redux';

const BlogContainer = styled.main`
  width: 100vw;
  height: 100vh;
  z-index: 3;
  display: grid;
  grid-template-columns: minmax(10px, .13fr) 1fr;
  grid-template-rows: .2fr 1fr .2fr;

  grid-template-areas: "top top" "sidebard content" "footer footer";
`;

const BlogTilesList = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: content;
`;

export default function Blog(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBackgroundText("BLOG"));
    dispatch(setVisualPageIndex("03"));
  }, [dispatch])

  return (
    <BlogContainer>
      <BlogTilesList>
        <BlogTile
          date="21-03-1997"
          title="test"
          tags={["awawdawdawdd", "React"]}
          desc='awdawdawd'
          onClick={() => { console.log("AWD") }}
        />

        <BlogTile
          date="21-03-1997"
          title="test"

          tags={[]}
          desc='awdawdawd'
          onClick={() => { console.log("AWD") }}
        />

        <BlogTile
          date="21-03-1997"
          title="test"
          tags={[]}
          desc='awdawdawd'
          onClick={() => { console.log("AWD") }}
        />
      </BlogTilesList>
    </BlogContainer>
  )
}