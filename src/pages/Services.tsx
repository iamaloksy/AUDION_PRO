import { motion } from "framer-motion";
import {
  Guitar,
  Headphones,
  Mic2,
  PartyPopper,
  Speaker,
  Sparkles,
  Star,
  WandSparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import heroBg from "@/assets/hero-bg.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import teamcoo from "@/assets/team-coo.jpeg";

const services = [
  {
    icon: Headphones,
    title: "DJ Setup",
    description:
      "Professional DJ setups with powerful sound and seamless mixing to keep the energy alive throughout your event.",
  },
  {
    icon: Guitar,
    title: "Live Band",
    description:
      "Experience the magic of live music with talented bands that bring soulful performances and vibrant energy to every celebration.",
  },
  {
    icon: Star,
    title: "Celebrity Artist",
    description:
      "Make your event unforgettable with appearances and performances by renowned celebrity artists.",
  },
  {
    icon: PartyPopper,
    title: "Dance Troupe",
    description:
      "High-energy dance performances by professional troupes that add excitement and entertainment to your event.",
  },
  {
    icon: Sparkles,
    title: "Couple Entry",
    description:
      "Grand and customized couple entries designed to create a magical and memorable moment.",
  },
  {
    icon: WandSparkles,
    title: "SFX (Special Effects)",
    description:
      "Enhance the atmosphere with stunning special effects including cold pyros, confetti, CO2 blasts, and more.",
  },
  {
    icon: Speaker,
    title: "Equipment",
    description:
      "Top-quality sound, lighting, and event equipment ensuring a flawless and professional experience.",
  },
  {
    icon: Mic2,
    title: "International Artist",
    description:
      "Bring global talent to your celebration with exclusive performances by internationally recognized artists.",
  },
];

const processSteps = [
  {
    title: "1. Music Blueprint",
    text: "Our team designs a tailored music and performance plan including key moments, genre flow, and special requests.",
    image: portfolio1,
    imageAlt: "Music blueprint planning",
  },
  {
    title: "2. Show Day Execution",
    text: "From setup to live performance, our experienced team manages every detail so you can simply enjoy the celebration.",
    image: portfolio2,
    imageAlt: "Show day execution",
  },
  {
    title: "3. Team Coordination",
    text: "Behind every performance is a dedicated team ensuring smooth operations, technical precision, and flawless execution throughout the event.",
    image: teamcoo,
    imageAlt: "Team coordination during event",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent uppercase tracking-[0.3em] text-sm md:text-base mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl tracking-wide"
          >
            All <span className="gold-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-muted-foreground max-w-3xl mx-auto mt-6"
          >
            Premium DJ and event entertainment services designed for weddings, clubs, festivals, corporate events, and unforgettable private celebrations.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="glass-card p-7"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-5 red-glow">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl tracking-wide text-foreground mb-3">{service.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-accent uppercase tracking-[0.3em] text-sm mb-3">How We Work</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-wide">
              From Plan To <span className="gold-text">Performance</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-2xl gold-text mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/15551234567?text=Hi%2C%20I%20want%20to%20book%20a%20DJ%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 red-glow"
            >
              Book a Meeting
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Services;
