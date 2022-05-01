import styled from 'styled-components';

import AboutMe from '@root/page-sections/AboutMe';
import Introduction from '@root/page-sections/Introduction';
import Projects from '@root/page-sections/Projects';

const Container = styled.div`
    background-color: darkseagreen;
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
