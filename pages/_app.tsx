import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import createStore from "../store";
import { appWithTranslation } from "../i18n";
import "bootstrap/scss/bootstrap.scss";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    /**
     * @ISSUE: namespacesRequired 를 작업 편의를 위해 여기서 한번에 보내주지만 대규모가 될경우 각 페이지에서 불러줘야 성능에 좋다.
     */
    return {
      pageProps: {
        ...pageProps,
        namespacesRequired: ["sample", "common", "meta"]
      }
    };
  }

  render() {
    // @ts-ignore
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(appWithTranslation(MyApp)));
