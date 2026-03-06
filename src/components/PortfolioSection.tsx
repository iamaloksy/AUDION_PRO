import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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

const instagramUrl = "https://www.instagram.com/audionpro_/";

const getWrappedIndex = (index: number, length: number) => {
  return (index + length) % length;
};

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

  const visibleSlides = [-1, 0, 1].map((offset) => {
    const idx = getWrappedIndex(current + offset, images.length);
    return {
      ...images[idx],
      idx,
      offset,
    };
  });

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

        <div className="max-w-6xl mx-auto relative overflow-hidden" onWheel={(e) => (e.deltaY > 0 ? next() : prev())}>
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-start justify-center gap-2 md:gap-4"
          >
            {visibleSlides.map((slide) => {
              const isCenter = slide.offset === 0;

              return (
                <a
                  key={`${slide.title}-${slide.idx}`}
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block shrink-0 ${isCenter ? "basis-[76%] md:basis-[70%]" : "basis-[12%] md:basis-[15%]"}`}
                >
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                    className={`relative overflow-hidden rounded-2xl glass-card cursor-pointer transition-all duration-300 ${
                      isCenter
                        ? "scale-100 z-20 border gold-border shadow-2xl"
                        : "scale-95 opacity-70 hover:opacity-90"
                    }`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className={`w-full object-cover ${isCenter ? "h-[280px] sm:h-[360px] md:h-[460px]" : "h-[240px] sm:h-[300px] md:h-[400px]"}`}
                      loading="lazy"
                    />
                  </motion.article>

                  <div className="pt-3 text-center">
                    <p className={`font-display tracking-wide ${isCenter ? "text-lg md:text-2xl gold-text" : "text-xs md:text-sm text-foreground/85"}`}>
                      {slide.title}
                    </p>
                    <p className={`uppercase mt-1 ${isCenter ? "text-[10px] md:text-xs text-accent tracking-[0.2em]" : "text-[9px] md:text-[10px] text-muted-foreground tracking-[0.1em]"}`}>
                      {slide.category}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>

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
