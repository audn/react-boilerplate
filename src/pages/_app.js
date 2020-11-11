import '~/public/css/style.css'
import Head from 'next/head'
import Default from '~/ui/layouts/Default'

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
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.13.1/css/all.css"
          integrity="sha384-B9BoFFAuBaCfqw6lxWBZrhg/z4NkwqdBci+E+Sc2XlK/Rz25RYn8Fetb+Aw5irxa"
          crossOrigin="anonymous"
        />
        <meta name="msapplication-TileColor" content="#7649f9"></meta>
        <meta name="theme-color" content="#7649f9"></meta>
      </Head>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default App
