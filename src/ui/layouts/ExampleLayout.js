import Header from '~/ui/components/Header'
import Footer from '~/ui/components/Footer'

const Layout = (props) => (
  <div className="flex flex-col min-h-screen bg-gray-200">
    <Header />
    <div className="bg-indigo-400">
      {/* visual example */}
      <div className="flex flex-wrap md:flex-no-wrap items-center justify-between max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center">
          <div className="text-white text-lg font-medium">
            This page is using a different layout!
          </div>
        </div>
      </div>
      {/* visual example */}
    </div>
    <main className="flex-1 w-full max-w-6xl p-4 mx-auto md:px-8 md:py-16">
      {props.children}
    </main>
    <Footer />
  </div>
)

export default Layout
