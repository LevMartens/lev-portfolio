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

const OtherProjectsSection = styled.div`
    margin: 20px 0 0;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 1fr;
    grid-gap: 15px;
`;

const ProjectCard = styled(motion.a)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    cursor: pointer;
    text-decoration: none;
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
    word-wrap: break-word;
`;

const Title = styled(CaveatDescription)`
    margin: 20px 0 20px 0;
    font-size: 30px;
    opacity: 0.8;
    color: black;
    word-wrap: break-word;
`;

const Technology = styled(SansDescriptionP)`
    font-size: clamp(10px, 8vw, 13px);
    line-height: 1.1;
    margin: 10px 20px 0 0;
    opacity: 0.8;
    color: black;
    word-wrap: break-word;
    &:last-of-type {
        margin: 10px 0;
    }
`;

const ImageContainer = styled.div`
    height: 30px;
    width: 30px;
`;

const TechRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

const OtherProjects = props => {
    const {} = props;

    const { otherProjects } = useCollectionContext();

    return (
        <Container>
            <Heading>Other Noteworthy Projects</Heading>
            <OtherProjectsSection>
                {otherProjects.map(project => (
                    <ProjectCard
                        key={project.id}
                        whileHover={{ y: -10 }}
                        target="_blank"
                        href={project.link}
                        rel="noreferrer"
                    >
                        <header>
                            <ImageContainer>
                                <Image src="/code.png" width={30} height={30} />
                            </ImageContainer>
                            <Title>{project.title}</Title>

                            <Description>{project.description}</Description>
                        </header>
                        <TechRow>
                            {project.techStack.map((tech, idx) => (
                                <Technology key={tech + idx}>{tech}</Technology>
                            ))}
                        </TechRow>
                    </ProjectCard>
                ))}
            </OtherProjectsSection>
        </Container>
    );
};

OtherProjects.propTypes = {};

OtherProjects.defaultProps = {};

export default OtherProjects;
