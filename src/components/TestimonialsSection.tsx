import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Bride",
    text: "Absolutely phenomenal! They made our wedding reception unforgettable. Every guest was on the dance floor all night long. Pure magic!",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Event Manager",
    text: "We've hired them for three corporate events now and they never disappoint. Professional, punctual, and incredibly talented at reading the room.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Birthday Celebration",
    text: "The energy they brought to my 30th birthday was incredible. The sound quality was top-notch and the mixing was seamless. Highly recommend!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Club Owner",
    text: "Since bringing them on as our resident DJ, our weekend bookings have doubled. They know exactly how to keep the crowd coming back for more.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-3">Reviews</p>
          <h2 className="font-display text-4xl md:text-6xl tracking-wide text-foreground">
            What People <span className="gold-text">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed italic mb-8">
                "{testimonials[current].text}"
              </p>

              <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center mx-auto mb-3">
                <span className="font-display text-xl text-primary-foreground">
                  {testimonials[current].name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <p className="font-display text-xl gold-text tracking-wider">
                {testimonials[current].name}
              </p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border gold-border flex items-center justify-center text-accent hover:gold-glow transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border gold-border flex items-center justify-center text-accent hover:gold-glow transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
