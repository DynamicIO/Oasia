import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Gallery from '@/components/Gallery'
import Philosophy from '@/components/Philosophy'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Philosophy />
      <Features />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}

