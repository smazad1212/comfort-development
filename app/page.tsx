import Header from './components/Header'
import Footer from './components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Website Under Development</h1>
          <p className="text-xl text-gray-600 mb-8">We're building something great for you.</p>
          <Link 
            href="https://cgc-bd.com/comfort-development/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Visit Our Current Site
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

