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

export const PrimaryGithubButton = styled.a`
  border: 2px solid #0860E5;
  display: block;
  height: 42px;
  width: 200px;
  line-height: 42px;
  text-align: center;
  color: white;
  background-color: transparent;
  font-weight: 300;

  text-decoration: none;

  @media (max-width:420px){
    height: 32px;
    width: 150px;
    line-height: 32px;
    margin-left: 5px;
    font-size: 15px;
    font-weight: 200;
  }
`;