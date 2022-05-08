import { CollectionContextProvider } from '@root/context/CollectionContext';

import Layout from '../src/layout/layout';

/** @TODO include models */

const App = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || null;

    if (!getLayout) {
        return (
            <CollectionContextProvider>
                <Layout title={Component.title || ''}>
                    <Component {...pageProps} />
                </Layout>
            </CollectionContextProvider>
        );
    }
    return getLayout(<Component {...pageProps} />);
};

export default App;
