import Router from 'next/router';
import Head from 'next/head';

import AppProvider from '@/context';

import GlobalStyle from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import NProgress from 'nprogress';
import light from '../styles/themes/light';

Router.events.on('routeChangeStart', () => NProgress.start().set(0.4));

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={light}>
      <AppProvider>
        <Head>
          <meta
            name="viewport"
            content="minimal-ui, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </AppProvider>
    </ThemeProvider>
  );
}
