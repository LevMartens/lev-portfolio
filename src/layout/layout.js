import styled from 'styled-components';

import AnimatedLayout from '@layout/animations/AnimatedLayout';

const BackGroundContainer = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    //background-image: url('/img/pikachu.png');
    //background-repeat: no-repeat;
    //background-size: contain;
`;

const Layout = ({ children, title }) => (
    <AnimatedLayout>{children}</AnimatedLayout>
);

export default Layout;
