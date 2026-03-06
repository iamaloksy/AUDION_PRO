import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const images = [
  { src: portfolio1, title: "Luxury Gala Night", category: "Private Event" },
  { src: portfolio2, title: "Festival Mainstage", category: "Festival" },
  { src: portfolio3, title: "Royal Wedding", category: "Wedding" },
  { src: portfolio4, title: "Corporate Summit", category: "Corporate" },
  { src: portfolio5, title: "Club Residency", category: "Nightclub" },
  { src: portfolio6, title: "Sunset Pool Party", category: "Pool Party" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-3">Our Work</p>
          <h2 className="font-display text-4xl md:text-6xl tracking-wide text-foreground">
            Port<span className="gold-text">folio</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.article
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-4 md:p-6"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={images[current].src}
                  alt={images[current].title}
                  className="w-full h-[340px] sm:h-[420px] md:h-[520px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />

                <div className="absolute left-0 right-0 bottom-0 p-6 md:p-8 text-center">
                  <p className="font-display text-3xl md:text-4xl gold-text tracking-wide">
                    {images[current].title}
                  </p>
                  <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] mt-2">
                    {images[current].category}
                  </p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border gold-border flex items-center justify-center text-accent hover:gold-glow transition-all duration-300"
              aria-label="Previous portfolio slide"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to portfolio slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border gold-border flex items-center justify-center text-accent hover:gold-glow transition-all duration-300"
              aria-label="Next portfolio slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
