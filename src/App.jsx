import Header from './components/Header'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import Features from './components/Features'
import BentoGrid from './components/BentoGrid'
import BuiltFor from './components/BuiltFor'
import CodeShowcase from './components/CodeShowcase'
import Dashboard from './components/Dashboard'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Pillars />
      <BuiltFor />
      <Features />
      <BentoGrid />
      <CodeShowcase />
      <Dashboard />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
