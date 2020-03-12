import styled from 'styled-components';

export const PrimaryButton = styled.button`
  border: none;
  width: ${props => props.themeSmall ? "130px" : "150px"};
  height: ${props => props.themeSmall ? "35px" : "50px"};
  background: linear-gradient(270deg, #0860E6 0%, #0C8AFF 100%);
  box-shadow: 0px 0px 16px rgba(0, 115, 198, 0.56);
  border-radius: 4px;
  font-family: Roboto;
  font-weight: bold;
  text-align: center;
  font-size: ${props => props.themeSmall ? "10px" : "15px"};
  line-height: ${props => props.themeSmall ? "12px" : "18px"};
  color: #FFFFFF;
`;