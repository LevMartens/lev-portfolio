import styled from 'styled-components';

import AboutMe from '@root/page-sections/AboutMe';
import GetInTouch from '@root/page-sections/GetInTouch';
import Introduction from '@root/page-sections/Introduction';
import OtherProjects from '@root/page-sections/OtherProjects';
import Projects from '@root/page-sections/Projects';

const Container = styled.div``;

export const getStaticProps = async () => ({
    props: {},
});

const Home = () => (
    <Container>
        <Introduction />
        <AboutMe />
        <Projects />
        <OtherProjects />
        <GetInTouch />
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
