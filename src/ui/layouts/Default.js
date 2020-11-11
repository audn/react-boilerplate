import Header from '~/ui/components/Header'
import Footer from '~/ui/components/Footer'
import Router from 'next/router'

import { trackPageview } from '~/utility/data/Analytics'

Router.events.on('routeChangeComplete', (url) => {
  trackPageview(url)
})
const Layout = (props) => (
  <div className="flex flex-col min-h-screen bg-gray-200">
    <Header />
    <main className="flex-1 w-full max-w-6xl p-4 mx-auto md:px-8 md:py-16">
      {props.children}
    </main>
    <Footer />
  </div>
)

export default Layout
