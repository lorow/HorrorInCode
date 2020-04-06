import styled from 'styled-components';

export const Tag = styled.p`
  padding: 10px;
  margin-left: 10px;
  -right: 5px;
  display: block;
  line-height: initial;
  min-width: 36px;
  width: auto;
  height: 16px;
  background-color: rgba(8, 96, 229, .9);
  color: white;
  font-size: 13px;

  &:not(:nth-last-of-type()){
    margin-left: 5px;
  }
`;