import React from 'react';
import { Tag } from './tag';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TileContainer = styled(motion.article)`
  color: white;
  margin-bottom: 5vh;
  z-index: 1;
  &:hover{
    cursor: pointer;
  }
`;

const TileHeader = styled.header`
  display: flex;
  line-height: 36px;
`;

const DateTile = styled.p`
  font-size: 15px;
  opacity: .8;
  margin-right: 20px;
`;

const TileTitle = styled.h2`
  font-size: calc(1.5rem + 2vw);
`;

const TileDesc = styled.p`
  max-width: 40%;
  max-height: 8vh;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function BlogTile({ date, title, desc, tags, onClick, orderID, variants }) {
  return (
    <TileContainer
      onClick={onClick}
      custom={orderID}
      variants={variants}
    >
      <TileHeader>
        <DateTile>{date}</DateTile>
        {
          tags.map(tag => <Tag key={tag.id}>{tag.name}</Tag>)
        }
      </TileHeader>
      <TileTitle>
        {title}
      </TileTitle>
      <TileDesc>
        {desc}
      </TileDesc>
    </TileContainer>
  )
}