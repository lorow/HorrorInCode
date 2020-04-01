import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBackgroundText, setVisualPageIndex } from '../actions/pageActions';
import { PrimaryButton } from '../components/button';
import { rootTransition } from '../transitions';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Layout = styled(motion.main)`
  height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: .8fr 1fr .3fr;
  grid-gap: 10px;
  grid-template-rows: .9fr 1.2fr .8fr 1.2fr .6fr;
  grid-template-areas: "spacer spacer" "imageSection about" "social button"  "empty empty";
  grid-gap: 10px;
  @media (max-width: 468px) {
    grid-template-columns: .1fr 1fr .5fr;
    grid-template-rows: .3fr .3fr .1fr;
    grid-template-areas: "spacer spacer spacer" "left about imageSection" "button button button"  "social social social";
  }
`;

const TextContainer = styled.div`
  grid-area: about;
  display: flex;
  flex-direction: column;
  color: white;
  padding-right: 20px;

  p {
    opacity: .8;
    font-size: calc(.8em + .2vw);
    margin-bottom: 10px;
  }
`;

const SectionTitle = styled.h2`
  font-size: calc(2rem + 1.5vw);
  font-weight: 600;
  color: white;
`;

const DimmedImage = styled.img`
  grid-area: imageSection;
  filter: grayscale();
  margin-left: auto;
  margin-right: 40px;
  width: 200px;
  -webkit-mask-image: -webkit-gradient(linear, left top, 
    left bottom, from(rgba(0,0,0,.9)), to(rgba(0,0,0, 0)));

  @media(max-width: 540px){
    width: 120px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const EmailButton = styled(PrimaryButton)`
  grid-area: button;
  @media(max-width: 768px){
  margin-left: auto;
  margin-right: auto;
  }

  a{
    color: white;
    text-decoration: none;
    font-weight: 100;
  }
`;

export default function AboutMe(props) {

  const dispatch = useDispatch();
  const animVariants = rootTransition['about'];

  useEffect(() => {
    dispatch(setBackgroundText("ABOUT ME"));
    dispatch(setVisualPageIndex("02"));
  }, [dispatch])

  return (
    <Layout variants={animVariants} initial="initial" animate="in" exit="out">
      <DimmedImage custom={1} variants={animVariants} src="/static/img/zdzich.jpg" />
      <TextContainer>
        <SectionTitle custom={0} variants={animVariants}>About me</SectionTitle>
        <motion.div custom={0} variants={animVariants}>
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
            {`But work isn't the only thing that makes life worth living, I love to 3D print all the things, and to shred snow with my board in the season.`}
          </p>
        </motion.div>
      </TextContainer>
      <EmailButton custom={1} variants={animVariants}><a href="mailto: goik.zdzislaw@gmail.com">Let's talk!</a></EmailButton>
    </Layout>
  )
}