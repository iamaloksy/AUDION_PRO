import { useRef, useState, type TouchEvent, type WheelEvent } from "react";
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
  const touchStartXRef = useRef<number | null>(null);
  const wheelLockUntilRef = useRef(0);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % images.length);
  };

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now < wheelLockUntilRef.current) {
      return;
    }

    if (Math.abs(e.deltaY) < 8) {
      return;
    }

    wheelLockUntilRef.current = now + 420;
    if (e.deltaY > 0) {
      next();
    } else {
      prev();
    }
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) {
      return;
    }

    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;

    if (Math.abs(deltaX) < 45) {
      return;
    }

    if (deltaX < 0) {
      next();
    } else {
      prev();
    }
  };

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

        <div
          className="max-w-6xl mx-auto relative overflow-hidden"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            key={current}
            initial={{ x: direction * 64 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex items-start justify-center"
          >
            {visibleSlides.map((slide) => {
              const isCenter = slide.offset === 0;
              const sideShiftClass = slide.offset < 0 ? "translate-x-5 md:translate-x-8" : "-translate-x-5 md:-translate-x-8";

              return (
                <a
                  key={`${slide.title}-${slide.idx}`}
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block shrink-0 transition-all duration-300 ${
                    isCenter ? "basis-[78%] md:basis-[72%] z-20" : `basis-[16%] md:basis-[18%] z-10 ${sideShiftClass}`
                  }`}
                >
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                    className={`relative overflow-hidden rounded-2xl glass-card cursor-pointer transition-all duration-300 ${
                      isCenter
                        ? "scale-100 border gold-border shadow-2xl"
                        : "scale-90 md:scale-[0.88] opacity-85"
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
                  onClick={() => {
                    if (i === current) return;
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
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
