import db from '@firebase/clientApp';
import { collection, getDocs } from 'firebase/firestore/lite';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import styled from 'styled-components';

import useCollection from '@hooks/useCollection';

import {
    Banner,
    CaveatDescription,
    SansDescriptionP,
} from '../../styles/Fonts';

const Container = styled.div`
    min-height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const ProjectsSection = styled.div`
    margin: 20px 0 0;
`;

const ATag = styled.a`
    text-decoration: none;
    cursor: pointer;
`;

const DescriptionBox = styled.div`
    position: relative;
    z-index: 3;
    margin: 20px 0;
    padding: 15px 20px;
    background-color: white;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
`;

const TechnologyRow = styled.div`
    //background-color: plum;
    position: relative;
    z-index: 3;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    //justify-content: flex-end;

    &:not(:last-of-type) {
        margin: 20px 0;
    }
`;

const GridRow = styled.li`
    position: relative;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    //margin: 0;
    //padding: 0;
    @media (max-width: 768px) {
        grid-template-rows: 1fr 1fr;
    }

    &:not(:last-of-type) {
        margin-bottom: 100px;

        @media (max-width: 768px) {
            margin-bottom: 70px;
        }

        @media (max-width: 480px) {
            margin-bottom: 30px;
        }
    }

    &:nth-of-type(odd) {
        .project-content {
            grid-column: 7 / -1;
            grid-row: 1 / -1;
            position: relative;
            text-align: right;
            z-index: 3;
            @media (max-width: 1080px) {
                grid-column: 5 / -1;
            }
            @media (max-width: 768px) {
                grid-column: 1 /-1;
                grid-row: 1 / 2;
            }
        }

        .tech-row {
            justify-content: flex-end;
        }

        .project-image {
            grid-column: 1 / 8;
            grid-row: 1 / -1;
            position: relative;

            z-index: 2;
            @media (max-width: 768px) {
                grid-column: 1 /-1;
                grid-row: 2 / -1;
            }
        }
    }

    .project-content {
        grid-column: 1 / 7;
        grid-row: 1 / -1;
        position: relative;
        text-align: left;
        z-index: 3;
        @media (max-width: 1080px) {
            grid-column: 1 / 9;
        }

        @media (max-width: 768px) {
            grid-column: 1 /-1;
            grid-row: 1 / 2;
            //display: flex;
            //flex-direction: column;
            //justify-content: center;
            //height: 100%;
            //grid-column: 1;
            //padding: 40px 40px 30px;
            //z-index: 5;
        }
    }

    .project-image {
        grid-column: 6 / -1;
        grid-row: 1 / -1;
        position: relative;

        overflow: hidden;

        z-index: 1;

        @media (max-width: 768px) {
            grid-column: 1 /-1;
            grid-row: 2 / -1;
            //grid-column: 2 / -1;
            //height: 100%;
            //opacity: 0.25;
        }
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
    font-size: clamp(10px, 8vw, 18px);
    line-height: 1.1;
    //text-align: right;
    margin: 10px 0;
    padding-right: 20px;
    opacity: 0.8;
    color: black;
`;

const Text3 = styled(Banner)`
    font-size: clamp(26px, 8vw, 32px);
    //text-align: right;
    font-weight: 700;
    margin: 20px 0 0 0;
`;

const Text4 = styled(CaveatDescription)`
    //text-align: right;
    margin: 20px 0 0 0;
    background: linear-gradient(180deg, #d0e, #91f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Text5 = styled(SansDescriptionP)`
    font-size: clamp(10px, 8vw, 13px);
    line-height: 1.1;
    //text-align: right;
    margin: 10px 20px 0 0;
    //padding-right: 20px;
    opacity: 0.8;
    color: black;
    &:last-of-type {
        margin: 10px 0;
    }
`;

const Overlay = styled(motion.div)`
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, #d0e, #91f);
    border-radius: 5px;
    opacity: 0.2;
    z-index: 1000;
`;

const Projects = props => {
    const {} = props;

    const { projects, initializeProjects } = useCollection();

    useEffect(() => {
        initializeProjects();
    }, []);

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

    // console.log('projects', projects[0].name);

    return (
        <Container>
            <Text>Projects</Text>
            <ProjectsSection>
                <GridRow>
                    <div className="project-content">
                        <Text4>Featured Project</Text4>
                        <Text3>SuperGuardian™</Text3>
                        <DescriptionBox>
                            <Text2>
                                A minimal, dark blue theme for VS Code, Sublime
                                Text, Atom, iTerm, and more. Available on Visual
                                Studio Marketplace, Package Control, Atom
                                Package Manager, and npm.
                            </Text2>
                        </DescriptionBox>
                        <TechnologyRow className="tech-row">
                            <Text5>React</Text5>
                            <Text5>NextJS</Text5>
                            <Text5>Storybook</Text5>
                            <Text5>Styled Components</Text5>
                        </TechnologyRow>
                        <TechnologyRow className="tech-row">
                            <ATag
                                href="https://www.superguardian.com.au/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Image
                                    src="/external-link-symbol.png"
                                    width={20}
                                    height={20}
                                />
                            </ATag>
                        </TechnologyRow>
                    </div>
                    <div className="project-image">
                        <Overlay whileHover={{ opacity: 0 }} />
                        <ATag
                            href="https://codefishstudio.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Image
                                style={{ borderRadius: '3px' }}
                                src="/super.png"
                                width={600}
                                height={450}
                            />
                        </ATag>
                    </div>
                </GridRow>

                <GridRow>
                    <div className="project-content">
                        <Text4>Featured Project</Text4>
                        <Text3>Viability.io</Text3>
                        <DescriptionBox>
                            <Text2>
                                A minimal, dark blue theme for VS Code, Sublime
                                Text, Atom, iTerm, and more. Available on Visual
                                Studio Marketplace, Package Control, Atom
                                Package Manager, and npm.
                            </Text2>
                        </DescriptionBox>
                        <TechnologyRow className="tech-row">
                            <Text5>React Native</Text5>
                            <Text5>NextJS</Text5>
                            <Text5>Storybook</Text5>
                            <Text5>Styled Components</Text5>
                        </TechnologyRow>
                        <TechnologyRow className="tech-row">
                            {/* <Link href="https://www.superguardian.com.au/"> */}
                            <ATag
                                href="https://www.superguardian.com.au/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Image
                                    src="/external-link-symbol.png"
                                    width={20}
                                    height={20}
                                />
                            </ATag>
                            {/* </Link> */}
                        </TechnologyRow>
                    </div>
                    <div className="project-image">
                        <Overlay whileHover={{ opacity: 0 }} />
                        <ATag
                            href="https://codefishstudio.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Image
                                style={{ borderRadius: '3px' }}
                                src="/v.png"
                                width={600}
                                height={450}
                            />
                        </ATag>
                    </div>
                </GridRow>

                <GridRow>
                    <div className="project-content">
                        <Text4>Featured Project</Text4>
                        <Text3>SuperGuardian™</Text3>
                        <DescriptionBox>
                            <Text2>
                                A minimal, dark blue theme for VS Code, Sublime
                                Text, Atom, iTerm, and more. Available on Visual
                                Studio Marketplace, Package Control, Atom
                                Package Manager, and npm.
                            </Text2>
                        </DescriptionBox>
                        <TechnologyRow className="tech-row">
                            <Text5>React</Text5>
                            <Text5>NextJS</Text5>
                            <Text5>Storybook</Text5>
                            <Text5>Styled Components</Text5>
                        </TechnologyRow>
                        <TechnologyRow className="tech-row">
                            <ATag
                                href="https://www.superguardian.com.au/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Image
                                    src="/external-link-symbol.png"
                                    width={20}
                                    height={20}
                                />
                            </ATag>
                        </TechnologyRow>
                    </div>
                    <div className="project-image">
                        <Overlay whileHover={{ opacity: 0 }} />
                        <ATag
                            href="https://codefishstudio.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Image
                                style={{ borderRadius: '3px' }}
                                src="/super.png"
                                width={600}
                                height={450}
                            />
                        </ATag>
                    </div>
                </GridRow>
            </ProjectsSection>
        </Container>
    );
};

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
