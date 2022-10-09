import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { GA_TRACKING_ID } from '../common/utils/analytics';

export default class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script
            src="https://kit.fontawesome.com/84c3028184.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />

          <meta name="application-TileColor" content="#4d7fff" />
          <meta name="theme-color" content="#4d7fff" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
