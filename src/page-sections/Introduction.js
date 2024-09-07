/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { motion } from "framer-motion";
import styled from "styled-components";

import {
  Banner,
  CaveatDescription,
  FullName,
  SansDescription,
} from "../../styles/Fonts";

const Container = styled.div`
  min-height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Greeting = styled(CaveatDescription)`
  margin: 0 0 0 3px;
`;

const Text = styled(Banner)`
  font-size: clamp(40px, 8vw, 80px);
  line-height: 1.1;
  margin: 0;
`;

const Text2 = styled(SansDescription)`
  font-size: clamp(10px, 8vw, 20px);
  line-height: 1.1;
  margin: 20px 0;
  max-width: 540px;
  opacity: 0.8;
  color: black;
`;

const LinkText = styled(SansDescription)`
  font-size: clamp(10px, 8vw, 20px);
  line-height: 1.1;
  margin: 2px 0;
  background: linear-gradient(180deg, #d0e, #91f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ButtonText = styled(FullName)`
  margin: 0;
  text-align: center;
  color: #ffffff;
  line-height: 43px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 20px;
  }
`;

const Button = styled(motion.a)`
  width: 180px;
  height: 50px;
  margin-top: 40px;
  padding: 15px;
  background: linear-gradient(180deg, #d0e, #91f);
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 768px) {
    width: 130px;
    height: 20px;
  }
`;

const Introduction = (props) => {
  const {} = props;

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      transition: { duration: 0.5 },
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Container
      as={motion.ul}
      className="load-screen--message"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <Greeting as={motion.span} variants={item}>
        Hi, my name is
      </Greeting>
      <Text as={motion.span} variants={item}>
        Lev Martens
      </Text>
      <Text as={motion.span} variants={item} style={{ opacity: 0.8 }}>
        I build front-end for web and mobile.
      </Text>
      <Text2 as={motion.span} variants={item}>
        {`I'm a front-end developer specializing in building exceptional 
                user experiences. Currently, I'm focused on building accessible, 
                human centered products at `}
        {/* <a
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://codefishstudio.com/"
          rel="noreferrer"
        > */}
        <LinkText>AetherCode</LinkText>
        {/* </a> */}
      </Text2>
      <Button
        href="mailto:levmartens@gmail.com"
        variants={item}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <ButtonText>Get in Touch</ButtonText>
      </Button>
    </Container>
  );
};

Introduction.propTypes = {};

Introduction.defaultProps = {};

export default Introduction;
