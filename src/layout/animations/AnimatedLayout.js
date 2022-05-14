import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Banner, FullName } from '../../../styles/Fonts';
/* eslint-disable react/no-array-index-key */

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &.show-page {
      justify-content: unset;
    },
`;

const ContactContainer = styled.div`
    bottom: 50px;
    left: 50px;
    position: fixed;
    @media (max-width: 768px) {
        display: none;
    }
`;

const GitHub = styled.div`
    height: 20px;
    width: 20px;
    background-image: url('/git.png');
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 20px;
    cursor: pointer;
`;
const LinkedIn = styled.div`
    height: 20px;
    width: 20px;
    background-image: url('/in.png');
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
`;

const Page = styled.div`
    margin: 0 auto;
    padding: 0 150px;
    min-height: 100vh;
    width: 100%;
    max-width: 1600px;
    @media (max-width: 768px) {
        padding: 0 50px;
    }
`;

const NameContainer = styled.div`
    position: fixed;
    width: 180px;
    height: 50px;
    display: grid;
    overflow: hidden;
    margin-bottom: 10px;
    list-style: none;
    grid-template-columns: 45px 115px;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 15px;
    background: linear-gradient(180deg, #d0e, #91f);
    border-radius: 50px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const Text = styled(Banner)`
    margin: 0 0 140px 0;
    text-align: center;
    color: #333333;
`;

const Text2 = styled(FullName)`
    margin: 0;
    text-align: start;
    color: #333333;
`;

const AnimatedLayout = props => {
    const { children } = props;

    const controls = useAnimation();
    const controls2 = useAnimation();

    const line1 = 'Hi, my name is';
    const [isAnimating, setIsAnimating] = useState(true);
    const [o, setO] = useState(true);
    const [a, setA] = useState(false);
    const sentence = {
        hidden: {
            opacity: 1,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            transition: {
                duration: 0.1,
            },
            opacity: 1,
            y: 0,
        },
    };

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

    useEffect(() => {
        let timer2 = null;
        const timer = setTimeout(async () => {
            await controls2.start('visible');
            await controls.start('visible');
            timer2 = setTimeout(async () => {
                setO(false);
                await controls2.start('hidden');
                await controls.start({
                    width: 50,
                });
                await controls.start({
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ['20%', '20%', '50%', '50%'],
                });
                await controls.start({
                    top: 10,
                    left: 25,
                    transition: {
                        type: 'spring',
                        damping: 20,
                    },
                    gridTemplateColumns: '15px 35px',
                });
                setA(true);
                setIsAnimating(false);
            }, 1100);
        }, 500);
        return () => {
            clearTimeout(timer2);
            clearTimeout(timer);
        };
    }, [controls, controls2]);

    return (
        <Container className={!isAnimating && 'show-page'}>
            <Text
                x-if={isAnimating}
                as={motion.span}
                className="load-screen--message"
                variants={sentence}
                initial="hidden"
                animate={controls2}
                exit={{ opacity: 0 }}
            >
                {line1.split('').map((char, idx) => (
                    <motion.span key={`${char}-${idx}`} variants={letter}>
                        {char}
                    </motion.span>
                ))}
            </Text>
            <NameContainer
                as={motion.ul}
                className="load-screen--message"
                variants={container}
                initial="hidden"
                animate={controls}
                layout
            >
                <Text2
                    x-if={o}
                    as={motion.span}
                    style={{ color: 'white' }}
                    variants={item}
                >
                    Lev
                </Text2>
                <Text2
                    x-if={o}
                    as={motion.span}
                    style={{ color: 'white' }}
                    variants={item}
                >
                    Martens
                </Text2>
                <Text2 x-if={a} style={{ color: 'white' }}>
                    L
                </Text2>
                <Text2 x-if={a} style={{ color: 'white' }}>
                    M
                </Text2>
            </NameContainer>
            <Page x-if={!isAnimating}>{children}</Page>
            <ContactContainer x-if={!isAnimating}>
                <a
                    target="_blank"
                    href="https://github.com/LevMartens"
                    rel="noreferrer"
                >
                    <GitHub />
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/lev-martens"
                    rel="noreferrer"
                >
                    <LinkedIn />
                </a>
            </ContactContainer>
        </Container>
    );
};

AnimatedLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
};

AnimatedLayout.defaultProps = {};

export default AnimatedLayout;
