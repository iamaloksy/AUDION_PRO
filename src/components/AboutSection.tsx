import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-3">Who We Are</p>
          <h2 className="font-display text-4xl md:text-6xl tracking-wide text-foreground">
            About <span className="gold-text">Us</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12 max-w-4xl mx-auto mb-16"
        >
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-center">
            We are a premier DJ service provider dedicated to creating extraordinary musical
            experiences. From intimate weddings to massive festival stages, our team of
            professional DJs brings the perfect blend of energy, artistry, and state-of-the-art
            sound to every event. With over a decade of experience, we don't just play music —
            we craft unforgettable moments that keep your guests dancing all night long.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
