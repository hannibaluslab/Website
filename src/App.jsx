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
      {/* Announcement Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-amber-100 text-amber-900 text-center py-2.5 px-4 text-sm font-medium">
        SDKs rollout on the way. Final audit with Nethermind Security is happening now.
      </div>
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
