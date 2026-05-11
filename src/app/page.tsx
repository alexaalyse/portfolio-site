import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import WorkSection from "@/components/WorkSection"
import ResumeSection from "@/components/ResumeSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ResumeSection />
      <ContactSection />
    </main>
  )
}
