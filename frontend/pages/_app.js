// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';

import withData from '../lib/withData';

import '../components/styles/nprogress.css';

// MProgress improves user experience showing the progress of changing the page
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Page>
      <Component {...pageProps} />
    </Page>
  </ApolloProvider>
);

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;

  return { pageProps };
};

export default withData(MyApp);
