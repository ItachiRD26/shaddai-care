import HeroSection from "@/components/home-hero"
import ProgramsSection from "@/components/programs-section"
import WhyChooseUs from "@/components/why-choose-us"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import VideoSection from "@/components/video-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProgramsSection />
      <VideoSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
