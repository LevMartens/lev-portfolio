import styled from 'styled-components';

import AboutMe from '@root/page-sections/AboutMe';
import Introduction from '@root/page-sections/Introduction';
import Projects from '@root/page-sections/Projects';

const Container = styled.div`
    //overflow: scroll;
    height: 100vh;
    margin: 300px 0 200px 0;
`;

export const getStaticProps = async () => ({
    props: {},
});

const Home = () => (
    <Container>
        <Introduction />
        <AboutMe />
        <Projects />
    </Container>
);

Home.title = 'Home';

Home.propTypes = {
    // Data
};

Home.defaultProps = {
    // Data
};

export default Home;
