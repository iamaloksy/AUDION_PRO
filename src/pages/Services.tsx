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

const services = [
  {
    icon: Headphones,
    title: "Dj set up",
    description:
      "Complete DJ console setup with curated music flow and live mixing for high-energy events.",
    includes: ["DJ console", "Live mixing", "Music planning"],
  },
  {
    icon: Guitar,
    title: "live band",
    description:
      "Professional live band performances for weddings, private parties, and premium event stages.",
    includes: ["Live vocals", "Band coordination", "Soundcheck"],
  },
  {
    icon: Star,
    title: "Celeb artist",
    description:
      "Celebrity artist booking and on-stage management for impactful and unforgettable event highlights.",
    includes: ["Artist booking", "Stage coordination", "Hospitality support"],
  },
  {
    icon: PartyPopper,
    title: "Dance troupe",
    description:
      "Skilled dance troupe performances designed to elevate crowd energy and visual appeal.",
    includes: ["Theme choreography", "Stage routines", "Entry acts"],
  },
  {
    icon: Sparkles,
    title: "Couple entry",
    description:
      "Premium couple entry concepts with music cues, choreography moments, and timing-perfect execution.",
    includes: ["Entry concept", "Track editing", "Cue management"],
  },
  {
    icon: WandSparkles,
    title: "Sfx",
    description:
      "Special effects integration including cold pyro moments, confetti, and atmospheric enhancements.",
    includes: ["Cue sync", "Effect setup", "Safety protocol"],
  },
  {
    icon: Speaker,
    title: "Equipments",
    description:
      "End-to-end event equipment support including audio, lights, mics, and backup technical gear.",
    includes: ["PA systems", "Wireless mics", "Technical crew"],
  },
  {
    icon: Mic2,
    title: "International artist",
    description:
      "International artist sourcing and complete show management for destination and luxury events.",
    includes: ["Global talent", "Travel logistics", "On-site management"],
  },
];

const processSteps = [
  {
    title: "1. Discovery Call",
    text: "We discuss your event goals, audience, venue, and the exact vibe you want to create.",
  },
  {
    title: "2. Music Blueprint",
    text: "You get a tailored set structure with key moments, genre priorities, and must-play requests.",
  },
  {
    title: "3. Show Day Execution",
    text: "Our team handles setup, live performance, and coordination so you can enjoy the experience.",
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
            End-to-end DJ and event audio services built for weddings, clubs, festivals, corporate
            events, and private celebrations.
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
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="text-sm text-accent tracking-wide uppercase">
                      {item}
                    </li>
                  ))}
                </ul>
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
              Book A Service
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Services;
