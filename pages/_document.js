import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html
                style={{
                    // boxSizing: 'border-box',
                    width: '100%',
                    scrollBehavior: 'smooth',
                }}
            >
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Caveat:wght@300;400;500;600;700;900&family=Work+Sans:wght@300;400;500;600;700;900&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body
                    style={{
                        margin: '0px',
                        padding: '0px',
                        height: '100%',
                        width: '100%',
                        minHeight: '100%',
                        overflowX: 'hidden',
                    }}
                >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}