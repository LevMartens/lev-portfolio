import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Banner, FullName } from '../../../styles/Fonts';
/* eslint-disable react/no-array-index-key */

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 300px ;
    &.show-page {
      justify-content: unset;
    },
    
`;

const Page = styled.div``;

const NameContainer = styled.div`
    position: absolute;
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
                    top: 20,
                    left: 30,
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
