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

const getRelativeOffset = (index: number, current: number, length: number) => {
  let offset = index - current;
  if (offset > length / 2) offset -= length;
  if (offset < -length / 2) offset += length;
  return offset;
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const touchStartXRef = useRef<number | null>(null);
  const wheelLockUntilRef = useRef(0);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  const next = () => {
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
            Have a look <span className="gold-text">at our work</span>
          </h2>
        </motion.div>

        <div
          className="max-w-6xl mx-auto relative overflow-hidden"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative h-[320px] sm:h-[400px] md:h-[500px]">
            {images.map((slide, index) => {
              const offset = getRelativeOffset(index, current, images.length);
              const abs = Math.abs(offset);
              const isCenter = offset === 0;

              const x = offset * 58;
              const y = abs * 34;
              const rotate = offset * 8;
              const scale = isCenter ? 1 : abs === 1 ? 0.82 : 0.6;
              const opacity = abs <= 1 ? 1 : 0;
              const zIndex = isCenter ? 30 : abs === 1 ? 20 : 0;

              return (
                <motion.a
                  key={slide.title}
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-1/2 top-0 w-[72%] md:w-[64%] -translate-x-1/2"
                  animate={{ x: `${x}%`, y, rotate, scale, opacity, zIndex }}
                  transition={{ type: "spring", stiffness: 165, damping: 22, mass: 0.78 }}
                  whileHover={isCenter ? { y: -6 } : undefined}
                  style={{ pointerEvents: abs <= 1 ? "auto" : "none" }}
                >
                  <article
                    className={`relative overflow-hidden rounded-2xl glass-card cursor-pointer transition-all duration-300 ${
                      isCenter ? "border gold-border shadow-2xl" : "opacity-90"
                    }`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="w-full object-cover h-[280px] sm:h-[360px] md:h-[460px]"
                      loading="lazy"
                    />
                  </article>
                </motion.a>
              );
            })}
          </div>

          <div className="pt-4 text-center">
            <p className="font-display tracking-wide text-lg md:text-2xl gold-text">
              {images[current].title}
            </p>
            <p className="uppercase mt-1 text-[10px] md:text-xs text-accent tracking-[0.2em]">
              {images[current].category}
            </p>
          </div>

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
