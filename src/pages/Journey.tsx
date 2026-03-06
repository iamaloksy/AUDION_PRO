import { motion } from "framer-motion";
import { Eye, Flag, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";
import heroBg from "@/assets/hero-bg.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const workPhotos = [
  { src: portfolio1, alt: "Luxury gala performance" },
  { src: portfolio2, alt: "Festival mainstage DJ set" },
  { src: portfolio3, alt: "Wedding dance floor moment" },
  { src: portfolio4, alt: "Corporate event setup" },
  { src: portfolio5, alt: "Club residency live set" },
  { src: portfolio6, alt: "Pool party evening performance" },
];

const timeline = [
  {
    year: "2013",
    title: "First Console, First Crowd",
    text: "What started as late-night bedroom mixes quickly became neighborhood parties and small community events.",
  },
  {
    year: "2017",
    title: "Going Professional",
    text: "We invested in professional sound systems, built signature routines, and started handling premium private bookings.",
  },
  {
    year: "2021",
    title: "Expanding The Brand",
    text: "From weddings to corporate nights and festivals, our crew became known for precision, energy, and crowd connection.",
  },
  {
    year: "Today",
    title: "Crafting Experiences",
    text: "Every event is treated like a story, with music pacing, emotional peaks, and technical excellence from start to finish.",
  },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Our Story",
    description:
      "We built this journey on trust, consistency, and unforgettable dance floors. Every booking is personal to us.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become the most trusted live-event music partner for modern celebrations across cities and cultures.",
  },
  {
    icon: Flag,
    title: "Our Mission",
    description:
      "Design sound-first experiences where music, lighting, and timing come together to move people emotionally.",
  },
];

const Journey = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-24">
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
            className="font-display text-5xl sm:text-5xl md:text-5xl tracking-wide "
          >
             Work, Story & Vision About Our Journey
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="text-accent uppercase tracking-[0.3em] text-sm md:text-base mb-4"
          >
            About Our Journey <span className="gold-text"></span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-muted-foreground max-w-3xl mx-auto mt-6"
          >
            A timeline of how we grew from local gigs to large-scale performances, and what still
            drives every set we play.
          </motion.p>
        </div>
      </section>

      {/* <AboutSection /> */}

      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-accent uppercase tracking-[0.3em] text-sm mb-3">Work Photos</p>
            <h2 className="section-heading-font text-4xl md:text-5xl tracking-wide">
              Moments Behind The <span className="gold-text">Music</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workPhotos.map((photo, i) => (
              <motion.div
                key={photo.alt}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl overflow-hidden glass-card"
              >
                <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-accent uppercase tracking-[0.3em] text-sm mb-3">Written Story</p>
            <h2 className="section-heading-font text-4xl md:text-5xl tracking-wide">
              Milestones On The <span className="gold-text">Road</span>
            </h2>
          </div>

          <div className="space-y-5">
            {timeline.map((item, i) => (
              <motion.article
                key={item.year}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="glass-card p-6 md:p-7"
              >
                <p className="text-accent text-sm uppercase tracking-[0.25em] mb-2">{item.year}</p>
                <h3 className="font-display text-2xl tracking-wide mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-accent uppercase tracking-[0.3em] text-sm mb-3">What Drives Us</p>
            <h2 className="section-heading-font text-4xl md:text-5xl tracking-wide">
              Story, Vision & <span className="gold-text">Purpose</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 red-glow">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl tracking-wide mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Journey;
