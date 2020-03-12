import React from 'react';
import { PrimaryButton } from '../components/button';
import styled from 'styled-components';

const Layout = styled.main`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: .5fr 1fr;
  grid-gap: 10px;
  grid-template-rows: .3fr 3fr .5fr .4fr .6fr;
  grid-template-areas: "spacer spacer" "imageSection about" "button button"  "social social";
`;

const TextContainer = styled.div`
  grid-area: about;
  display: flex;
  flex-direction: column;
  color: white;
  padding-right: 20px;

  p {
    opacity: .8;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  color: white;
`;

const DimmedImage = styled.img`
  grid-area: imageSection;
`;

const EmailButton = styled(PrimaryButton)`
  grid-area: button;
  z-index: 2;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 40px;
`;

export default function AboutMe(props) {

  return (
    <Layout>
      <DimmedImage />
      <TextContainer>
        <SectionTitle>About me</SectionTitle>
        <p>
          {"Like I said at the beginning, I’m Zdzisław Goik. I’m a passionate developer born in Poland."}
        </p>
        <p>
          {"I’m a freelance developer working with django and react on daily basis"}
        </p>
        <p>
          {`Driven by my passion, I try to learn and discover new things every day. I constantly seek to better myself in what I do, be it code, design or anything else. `}
        </p>
        <p>
          {`But work isn't the only thing that makes life worth living, I love to 3D print all the things, and shred snow my board in the season.`}
        </p>
      </TextContainer >
      <EmailButton themeSmall >Shoot me an email!</EmailButton>
    </Layout> 
  )
}