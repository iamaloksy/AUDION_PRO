import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";
import SocialSidebar from "@/components/SocialSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialSidebar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />

      <section className="px-4 md:px-8 pb-20 md:pb-24">
        <div className="container mx-auto max-w-4xl">
          <blockquote className="glass-card p-7 md:p-10 text-center">
            <p className="font-display text-2xl md:text-4xl leading-tight text-foreground">
              "At Audion Pro, we don't just play music - we create the vibe"
            </p>
          </blockquote>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Index;
