import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <br />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.img
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/favicon.ico"
          alt="DJ logo"
          className="w-17 h-17 md:w-17 md:h-17 mx-auto mb-4 rounded-xl red-glow"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-4"
        >
          EXPERIENCE EVENTS ELEVATED
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-wider mb-6"
        >
          {/* <span className="text-foreground">Feel The Beat.</span>
          <br />
          <span className="gold-text">Live The Night.</span> */}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10"
        >
          {/* Elevating events with electrifying beats, premium sound, and unforgettable energy.
          Your night, our soundtrack. */}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/15551234567?text=Hi%2C%20I%20want%20to%20book%20a%20DJ%20event." target="_blank"
            className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 red-glow"
          >
            Book Now
          </a>
          <a
            href="#portfolio"
            className="px-10 py-4 rounded-full border-2 gold-border text-accent font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:gold-glow"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 gold-border flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-accent" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
