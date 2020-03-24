import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ArticleContainer = styled(motion.article)`
`;

export default function BlogPost(props) {
  const { articleId } = useParams();
  return (
    <ArticleContainer animate="" exit={{}}>
      {articleId}
    </ArticleContainer>
  )
}