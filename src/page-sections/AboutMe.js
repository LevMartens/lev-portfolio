import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

import { Banner, SansDescriptionP, SansListItem } from '../../styles/Fonts';

const Container = styled.div`
    min-height: 100vh;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Technologies = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0 10px;
    padding: 0;
    margin: 20px 0 0;
    overflow: hidden;
    list-style: none;
`;

const ListItem = styled(SansListItem)`
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    display: list-item;
    text-align: -webkit-match-parent;

    &:before {
        content: '▹';
        position: absolute;
        left: 0;
        background: linear-gradient(180deg, #d0e, #91f);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 13px;
        line-height: 12px;
    }
`;

const Overlay = styled(motion.div)`
    position: absolute;
    height: 260px;
    width: 200px;
    background: linear-gradient(180deg, #d0e, #91f);
    border-radius: 5px;
    opacity: 0.2;
    z-index: 1000;
`;

const FloatingBoarder = styled(motion.div)`
    justify-content: center;
    align-items: center;
    position: absolute;
    overflow: hidden;
    top: 10px;
    left: 10px;
    height: 260px;
    width: 200px;
    border: 2px solid #d0e;
    border-radius: 3px;
    opacity: 1;
    z-index: 0;
    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 20px;
        left: 20px;
        z-index: -1;
        background-image: url('/lev-purple.png');
        background-repeat: no-repeat;
        background-size: contain;
        transform: rotate(90deg);
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const ImageDecoration = styled(motion.div)`
    position: relative;
    display: flex;
    height: 260px;
    width: 200px;
    border-radius: 3px;
`;

const GridRow = styled.div`
    margin: 20px 0 0;
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 20px;
    @media (max-width: 768px) {
        grid-template-columns: unset;
        grid-template-rows: 3fr 2fr;
    }
`;

const ImageContainer = styled.div`
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`;

const Text = styled(Banner)`
    font-size: clamp(26px, 8vw, 32px);
    font-weight: 700;
    margin: 0;
    &:before {
        content: '.';

        font-size: clamp(26px, 8vw, 40px);
        font-weight: 600;
        line-height: 30px;
        margin: 0 3px 0 0;

        background: linear-gradient(180deg, #d0e, #91f);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const Text2 = styled(SansDescriptionP)`
    font-size: clamp(10px, 8vw, 20px);
    line-height: 1.1;
    margin: 10px 0;
    padding-right: 20px;
    opacity: 0.8;
    color: black;
`;

const AboutMe = props => {
    const {} = props;

    const floatingBorderAnimation = {
        hover: {
            y: -10,
            x: 200,
            width: 250,
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%',
        },
    };

    return (
        <Container>
            <Text>About Me</Text>
            <GridRow>
                <Description>
                    <Text2>
                        Hello! My name is Lev and I enjoy creating things that
                        live on screens. My interest in software development
                        started back in 2019 when I decided to try and create my
                        first app.
                    </Text2>
                    <Text2>
                        Fast-forward to today, and I’ve have build multiple app
                        and web projects from git init to publishing on the app
                        store. My main focus these days is building accessible,
                        inclusive products and digital experiences at CodeFish
                        Studio for a variety of clients.
                    </Text2>
                    <Text2>
                        Here are a few technologies I’ve been working with
                        recently:
                    </Text2>
                    <Technologies>
                        <ListItem>React</ListItem>
                        <ListItem>React Native</ListItem>
                        <ListItem>Flutter</ListItem>
                        <ListItem>JavaScript (ES6+)</ListItem>
                        <ListItem>HTML5</ListItem>
                        <ListItem>CSS</ListItem>
                    </Technologies>
                </Description>
                <ImageContainer>
                    <ImageDecoration
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                    >
                        <FloatingBoarder variants={floatingBorderAnimation} />
                        <Overlay whileHover={{ opacity: 0 }} />
                        <Image
                            style={{ borderRadius: 3 }}
                            src="/lev.jpg"
                            height={100}
                            width={200}
                        />
                    </ImageDecoration>
                </ImageContainer>
            </GridRow>
        </Container>
    );
};

AboutMe.propTypes = {};

AboutMe.defaultProps = {};

export default AboutMe;
