import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { history } from '../history';

const ArticleContainer = styled(motion.article)`
`;

export default function BlogPost(props) {
  const { articleId } = useParams();

  useEffect(() => {
    if (isNaN(articleId))
      history.goBack();
  }, [articleId])

  return (
    <ArticleContainer animate="" exit={{}}>
      {articleId}
    </ArticleContainer>
  )
}