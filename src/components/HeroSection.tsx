import { AnimatePresence, motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo1 from "@/assets/logo1.png";

const HeroSection = () => {
  const showAudionPro = true;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div
        initial={{ y: "24%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.15, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: "center 70%" }}
      />

      <motion.div
        initial={{ y: "24%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.15, ease: "easeOut" }}
        className="absolute inset-0 hero-overlay"
      />

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
        <div className="-mt-8 md:-mt-12">
          <motion.img
            key="audion-pro"
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45 }}
            src={logo1}
            alt="AUDION PRO logo"
            className="mx-auto mb-4 object-contain w-64 h-64 md:w-80 md:h-80 [filter:drop-shadow(0_0_2px_rgba(255,255,255,0.95))_drop-shadow(0_0_10px_rgba(255,255,255,0.75))]"
          />

          <AnimatePresence>
            {showAudionPro && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="company-name-font text-4xl md:text-6xl gold-text mb-4"
              >
                AUDION PRO
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showAudionPro && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-accent uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-4"
              >
                EXPERIENCE EVENTS ELEVATED
              </motion.p>
            )}
          </AnimatePresence>
        </div>

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

        <AnimatePresence>
          {showAudionPro && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
          )}
        </AnimatePresence>
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
