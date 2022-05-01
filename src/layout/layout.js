import styled from 'styled-components';

import AnimatedLayout from '@layout/animations/AnimatedLayout';

const Layout = ({ children, title }) => (
    <AnimatedLayout>{children}</AnimatedLayout>
);

export default Layout;
