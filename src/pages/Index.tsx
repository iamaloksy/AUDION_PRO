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
      <FooterSection />
    </div>
  );
};

export default Index;
