import { motion } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';

import { useCollectionContext } from '@root/context/CollectionContext';

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

    @media (max-width: 768px) {
        padding-top: 150px;
    }
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

const UtilsRow = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

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
        }
    }
`;

const Heading = styled(Banner)`
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

const Description = styled(SansDescriptionP)`
    font-size: clamp(10px, 8vw, 18px);
    line-height: 1.1;
    margin: 10px 0;
    padding-right: 20px;
    opacity: 0.8;
    color: black;
`;

const ProjectName = styled(Banner)`
    font-size: clamp(26px, 8vw, 32px);
    font-weight: 700;
    margin: 20px 0 0 0;
`;

const Title = styled(CaveatDescription)`
    margin: 20px 0 0 0;
    background: linear-gradient(180deg, #d0e, #91f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Technology = styled(SansDescriptionP)`
    font-size: clamp(10px, 8vw, 13px);
    line-height: 1.1;
    margin: 10px 20px 0 0;
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

    const { projects } = useCollectionContext();

    return (
        <Container>
            <Heading>Projects</Heading>
            <ProjectsSection>
                {projects.map(project => (
                    <GridRow key={project.id}>
                        <div className="project-content">
                            <Title>Featured Project</Title>
                            <ProjectName>{project.name}</ProjectName>
                            <DescriptionBox>
                                <Description>{project.description}</Description>
                            </DescriptionBox>
                            <UtilsRow className="tech-row">
                                {project.techStack.map(tech => (
                                    <Technology key={project.id + tech}>
                                        {tech}
                                    </Technology>
                                ))}
                            </UtilsRow>
                            <UtilsRow className="tech-row">
                                <ATag
                                    href={project.website}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <Image
                                        src="/external-link-symbol.png"
                                        width={20}
                                        height={20}
                                    />
                                </ATag>
                            </UtilsRow>
                        </div>
                        <div className="project-image">
                            <Overlay whileHover={{ opacity: 0 }} />
                            <ATag
                                href={project.website}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Image
                                    style={{ borderRadius: '3px' }}
                                    src={project.image}
                                    width={600}
                                    height={450}
                                />
                            </ATag>
                        </div>
                    </GridRow>
                ))}
            </ProjectsSection>
        </Container>
    );
};

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
