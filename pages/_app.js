import Layout from '../src/layout/layout';

const App = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || null;

    if (!getLayout) {
        return (
            <Layout title={Component.title || ''}>
                <Component {...pageProps} />
            </Layout>
        );
    }
    return getLayout(<Component {...pageProps} />);
};

export default App;
