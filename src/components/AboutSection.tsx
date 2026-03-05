import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Headphones, Calendar, Speaker } from "lucide-react";

const stats = [
  { icon: Calendar, value: 12, suffix: "+", label: "Years Experience" },
  { icon: Headphones, value: 500, suffix: "+", label: "Events Covered" },
  { icon: Speaker, value: 50, suffix: "+", label: "Professional Setups" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl gold-text">
      {count}{suffix}
    </span>
  );
};

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="glass-card p-8 text-center group hover:border-accent/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:red-glow transition-all duration-300">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground text-sm uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
