import React, { Fragment } from 'react';
import Head from 'next/head';
import { GA_TRACKING_ID } from '../utility/data/Analytics';
import { AppProps } from 'next/app';
import '../assets/style.css';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>MyApp</title>
        <script
          src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://rawgit.com/ellekasai/twemoji-awesome/gh-pages/twemoji-awesome.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.13.1/css/all.css"
          integrity="sha384-B9BoFFAuBaCfqw6lxWBZrhg/z4NkwqdBci+E+Sc2XlK/Rz25RYn8Fetb+Aw5irxa"
          crossOrigin="anonymous"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){ dataLayer.push(arguments); }
              gtag('js', new Date());
    					gtag('config', '${GA_TRACKING_ID}');
        		`,
          }}
        />
        <meta name="msapplication-TileColor" content="#7649f9" />
        <meta name="theme-color" content="#7649f9" />
      </Head>
      <Component {...pageProps} key={router.route} />
    </Fragment>
  );
}
