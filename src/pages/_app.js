import Head from 'next/head'
import Default from '~/ui/layouts/Default'
import '~/public/css/style.css'

function App({ Component, pageProps, router }) {
  const Layout = Component.Layout || Default
  return (
    <Layout props={pageProps}>
      <Head>
        <title>MyApp</title>
        <script
          src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"
          crossOrigin="anonymous"
        />
        <link
          href="https://rawgit.com/ellekasai/twemoji-awesome/gh-pages/twemoji-awesome.css"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/mfd/09b70eb47474836f25a21660282ce0fd/raw/e06a670afcb2b861ed2ac4a1ef752d062ef6b46b/Gilroy.css"
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png?v=xQ7d8Epaed"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png?v=xQ7d8Epaed"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png?v=xQ7d8Epaed"
        ></link>
        <link
          rel="manifest"
          href="/favicon/site.webmanifest?v=xQ7d8Epaed"
        ></link>
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg?v=xQ7d8Epaed"
          color="#7649f9"
        ></link>
        <link
          rel="shortcut icon"
          href="frontend/public/favicon/favicon.ico?v=xQ7d8Epaed"
        ></link>
        <meta name="msapplication-TileColor" content="#ffffff"></meta>
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml?v=xQ7d8Epaed"
        ></meta>
        <meta name="theme-color" content="#7649f9"></meta>
      </Head>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default App
