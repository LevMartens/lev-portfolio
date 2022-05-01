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
    SansListItem,
} from '../../styles/Fonts';

const Container = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 300px;
    //margin-left: 100px;
`;

const ATag = styled.a`
    text-decoration: none;
`;

const DescriptionBox = styled.div`
    position: absolute;
    top: 130px;
    right: 70px;
    //margin-right: 70px;
    padding: 15px 20px;
    background-color: white; //#faf9f6; //#f5f5f5; //#f2f8ff;
    border-radius: 3px;
    //border: 1px solid rgba(0, 0, 0, 0.24);
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
`;

const DescriptionColumn = styled.div`
    position: relative;
    background-color: cadetblue;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
const ImageDecoration = styled(motion.div)`
    position: relative;
    display: flex;
    grid-column: -1 / 1; // 1 / 8;
    grid-area: 1 / 6 / -1 / -1;
    //padding: 5px;
    //height: 400px;
    //width: 520px;
    width: 100%;
    margin-left: 20px;
    //background: linear-gradient(180deg, #d0e, #91f);
    border-radius: 3px;
    // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
`;

const GridRow = styled.div`
    background-color: aqua;
    position: relative;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    &:not(:last-of-type) {
        margin-bottom: 100px;

        @media (max-width: 768px) {
            margin-bottom: 70px;
        }

        @media (max-width: 480px) {
            margin-bottom: 30px;
        }
    }

    &:nth-of-type(even) {
        .project-content {
            grid-column: 7 / -1;
            text-align: right;
            background-color: coral;
            height: 4rem;
            min-width: 0;

            //margin: 0 auto;
            //@media (max-width: 1080px) {
            //    grid-column: 5 / -1;
            //}
            //@media (max-width: 768px) {
            //    grid-column: 1 / -1;
            //    padding: 40px 40px 30px;
            //    text-align: left;
            //}
            //@media (max-width: 480px) {
            //    padding: 25px 25px 20px;
            //}
        }
        //.project-tech-list {
        //    justify-content: flex-end;
        //
        //    @media (max-width: 768px) {
        //        justify-content: flex-start;
        //    }
        //
        //    li {
        //        margin: 0 0 5px 20px;
        //
        //        @media (max-width: 768px) {
        //            margin: 0 10px 5px 0;
        //        }
        //    }
        //}
        //.project-links {
        //    justify-content: flex-end;
        //    margin-left: 0;
        //    margin-right: -10px;
        //
        //    @media (max-width: 768px) {
        //        justify-content: flex-start;
        //        margin-left: -10px;
        //        margin-right: 0;
        //    }
        //}
        .project-image {
            grid-column: 1 / 8;
            height: 4rem;
            background-color: plum;
            min-width: 0;

            //@media (max-width: 768px) {
            //    grid-column: 1 / -1;
            //}
        }
    }
`;

const TextRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
`;

const Text = styled(Banner)`
    background-color: plum;
    font-size: clamp(26px, 8vw, 32px);
    font-weight: 700;
    margin: 0;
`;

const Dot = styled(Banner)`
    font-size: clamp(26px, 8vw, 40px);
    font-weight: 600;
    line-height: 30px;
    margin: 0 3px 0 0;

    background: linear-gradient(180deg, #d0e, #91f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Text2 = styled(SansDescriptionP)`
    font-size: clamp(10px, 8vw, 18px);
    line-height: 1.1;
    text-align: right;
    width: 500px;
    margin: 10px 0;
    padding-right: 20px;
    opacity: 0.8;
    color: black;
`;

const Text3 = styled(Banner)`
    background-color: plum;
    font-size: clamp(26px, 8vw, 32px);
    text-align: right;
    font-weight: 700;
    margin: 0px 70px 0 0;
`;

const Text4 = styled(CaveatDescription)`
    text-align: right;
    margin: 0 70px 0 0;
    background: linear-gradient(180deg, #d0e, #91f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
            <TextRow>
                <Dot>.</Dot>
                <Text>Projects</Text>
            </TextRow>
            <GridRow>
                <div className="project-content">
                    {/* <ImageDecoration */}
                    {/*    initial="rest" */}
                    {/*    whileHover="hover" */}
                    {/*    animate="rest" */}
                    {/* > */}
                    {/*    <Image */}
                    {/*        style={{ borderRadius: 3 }} */}
                    {/*        src="/project1.png" */}
                    {/*        layout="fill" */}
                    {/*    /> */}
                    {/* </ImageDecoration> */}
                    {/* <DescriptionColumn> */}
                    {/*    <Text4>Featured Project</Text4> */}
                    {/*    <Text3>SuperGuard™ian</Text3> */}
                    {/*    <DescriptionBox> */}
                    {/*        <Text2> */}
                    {/*            A minimal, dark blue theme for VS Code, Sublime */}
                    {/*            Text, Atom, iTerm, and more. Available on Visual */}
                    {/*            Studio Marketplace, Package Control, Atom */}
                    {/*            Package Manager, and npm. */}
                    {/*        </Text2> */}
                    {/*    </DescriptionBox> */}
                    {/* </DescriptionColumn> */}
                </div>
                <div className="project-image">
                    {/* <Link href="https://codefishstudio.com/"> */}
                    {/*    <ATag> */}
                    {/*        <Image */}
                    {/*            src="/project1.png" */}
                    {/*            layout="responsive" */}
                    {/*            width="100%" */}
                    {/*            height={300} */}
                    {/*        /> */}
                    {/*    </ATag> */}
                    {/* </Link> */}
                </div>
            </GridRow>
        </Container>
    );
};

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
