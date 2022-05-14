import { motion } from 'framer-motion';

import styled from 'styled-components';

import { Banner, FullName, SansDescriptionP } from '../../styles/Fonts';

const Container = styled.div`
    min-height: 80vh;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        padding-top: 250px;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const CloseOf = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Text = styled(Banner)`
    font-size: clamp(26px, 8vw, 40px);
    font-weight: 700;
    margin: 0 0 20px;
    text-align: center;
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
    text-align: center;
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

const ClosingText = styled(SansDescriptionP)`
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

const GetInTouch = props => {
    const {} = props;

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            transition: { duration: 0.5 },
            y: 0,
            opacity: 1,
        },
    };

    return (
        <Container>
            <ContentContainer>
                <Text>Get In Touch</Text>
                <Text2>
                    Whether you have a question or just want to say hi, feel
                    free to send me a message :)
                </Text2>
                <Button
                    href="mailto:levmartens@gmail.com"
                    variants={item}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <ButtonText>Say Hello</ButtonText>
                </Button>
            </ContentContainer>
            <CloseOf>
                <ClosingText>Build by Lev Martens</ClosingText>
            </CloseOf>
        </Container>
    );
};

GetInTouch.propTypes = {};

GetInTouch.defaultProps = {};

export default GetInTouch;
