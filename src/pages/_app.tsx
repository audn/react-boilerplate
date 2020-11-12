import React, { Fragment } from 'react';
import Head from 'next/head';
import { GA_TRACKING_ID } from '../utility/data/Analytics';
import { AppProps } from 'next/app';
import '../assets/style.css';
{
  /* 
  Favicon = https://realfavicongenerator.net
  Don't forget this! https://i.imgur.com/SrXVxHw.png

  Structure:
  - Title
  - Fonts / Icons
  - Meta / Theme colors
  - Favicon
  - Scripts
  */
}
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>MyApp</title>
        <link
          rel="preload"
          as="style"
          media="none"
          data-onload="if(media!='all')media='all'"
          href="https://rawgit.com/ellekasai/twemoji-awesome/gh-pages/twemoji-awesome.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.13.1/css/all.css"
          integrity="sha384-B9BoFFAuBaCfqw6lxWBZrhg/z4NkwqdBci+E+Sc2XlK/Rz25RYn8Fetb+Aw5irxa"
          crossOrigin="anonymous"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta
          name="msapplication-config"
          content="/assets/favicon/browserconfig.xml"
        />
        <script
          src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"
          async
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
        ></script>
      </Head>
      <Component {...pageProps} key={router.route} />
    </Fragment>
  );
}
