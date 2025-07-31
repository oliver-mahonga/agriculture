import FeaturesSection from "@/components/components/Features"
import Footer from "@/components/components/Footer"
import GetStartedCTA from "@/components/components/GetStartedCTA"
//import { GetStartedCTA } from "@/components/components/GetStartedCTA"
import HeroSection from "@/components/components/HeroSection"
import HowItWorksSection from "@/components/components/HowItWorksSection"
//import { Hero } from "@/components/components/HeroSection"
import Navbar from "@/components/components/Navbar"
import TestimonialsSection from "@/components/components/TestimonialsSection"
//import { Navbar } from "@/components/components/Navbar"
//import { Features } from "@/components/Features"
//import { Navbar } from "@/components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <GetStartedCTA />
        <Footer />
        
      </main>
    </div>
  )
}
