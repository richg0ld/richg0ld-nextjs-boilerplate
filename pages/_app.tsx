import React from 'react';
import App, { Container } from 'next/app';
import { StoreProvider } from "../store/StoreContext";

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <StoreProvider>
                    <Component {...pageProps} />
                </StoreProvider>
            </Container>
        );
    }
}

export default MyApp;