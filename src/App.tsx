import './App.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Problems from './sections/Problems'
import Solutions from './sections/Solutions'
import HowItWorks from './sections/HowItWorks'
import Technology from './sections/Technology'
import Architecture from './sections/Architecture'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problems />
      <Solutions />
      <HowItWorks />
      <Technology />
      <Architecture />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
