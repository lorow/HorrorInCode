import React, { useEffect } from 'react';
import styled from 'styled-components';
import { setBackgroundText, setVisualPageIndex, completePageTransition } from '../actions/pageActions'
import { useSelector, useDispatch } from 'react-redux';

export default function Blog(props) {
  const dispatch = useDispatch();
  const pageInfo = useSelector(state => state.pageInfo);

  useEffect(() => {
    dispatch(setBackgroundText("BLOG"));
    dispatch(setVisualPageIndex("03"));
  }, [dispatch])

  useEffect(() => {
    if (pageInfo.isTransitioning) {
      // animate it
      dispatch(completePageTransition());
    }
    else {
      // animate enter
    }
  }, [pageInfo])

  return (
    <div>
      awdawd
    </div>
  )
}