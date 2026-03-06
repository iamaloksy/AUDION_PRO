import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";

const aboutMoments = [
  {
    title: "Audion Pro",
    text: "Audion Pro is a professional DJ and event entertainment brand dedicated to delivering exceptional musical experiences. With premium sound systems, high-energy performances, and a deep passion for unforgettable celebrations, we bring a refined and dynamic atmosphere to every event we perform.",
    image: portfolio1,
    imageAlt: "Audion Pro live event performance",
    reverse: false,
  },
  {
    title: "More Than Just DJs",
    text: "More than just DJs - we create the sound of unforgettable celebrations. Born from our journey as Desi Beat Entertainers, we combine years of experience, top-quality equipment, and a deep understanding of the crowd to create moments people remember long after the music stops.",
    image: portfolio2,
    imageAlt: "Desi Beat Entertainers journey moment",
    reverse: true,
  },
];

const MobileStoryCard = ({
  text,
  image,
  imageAlt,
}: {
  text: string;
  image: string;
  imageAlt: string;
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Stage 1: image visible. Stage 2: image fades. Stage 3: content appears.
  const imageOpacity = useTransform(scrollYProgress, [0, 0.38, 0.62, 1], [1, 1, 0.35, 0.25]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.58, 0.78, 1], [0, 0, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0, 0.58, 0.78, 1], [28, 28, 0, 0]);
  const contentBgOpacity = useTransform(scrollYProgress, [0, 0.55, 0.78, 1], [0.2, 0.2, 0.88, 0.95]);

  return (
    <section ref={sectionRef} className="h-[145vh]">
      <div className="sticky top-20">
        <article className="relative overflow-hidden rounded-2xl glass-card h-[75vh] min-h-[420px]">
          <motion.img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ opacity: imageOpacity }}
          />

          <motion.div
            style={{ opacity: contentBgOpacity }}
            className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/55"
          />

          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="absolute inset-x-0 bottom-0 p-5"
          >
            <p className="text-muted-foreground text-[15px] leading-relaxed">{text}</p>
          </motion.div>
        </article>
      </div>
    </section>
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
          <h2 className="section-heading-font text-4xl md:text-6xl tracking-wide text-foreground">
            About <span className="gold-text">Us</span>
          </h2>
        </motion.div>

        <div className="md:hidden space-y-8 max-w-lg mx-auto">
          {aboutMoments.map((moment, i) => (
            <MobileStoryCard
              key={`${moment.imageAlt}-${i}`}
              text={moment.text}
              image={moment.image}
              imageAlt={moment.imageAlt}
            />
          ))}
        </div>

        <div className="hidden md:block space-y-14 max-w-6xl mx-auto">
          {aboutMoments.map((moment, i) => {
            const imageFromLeft = !moment.reverse;
            const imageAnimation = { opacity: 0, x: imageFromLeft ? -50 : 50 };
            const contentAnimation = { opacity: 0, x: imageFromLeft ? 50 : -50 };

            return (
              <div key={moment.title} className="grid grid-cols-2 gap-10 items-center">
                {moment.reverse ? (
                  <>
                    <motion.article
                      initial={contentAnimation}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.65, delay: 0.1 }}
                      className="glass-card p-8"
                    >
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {moment.text}
                      </p>
                    </motion.article>

                    <motion.div
                      initial={imageAnimation}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.65 }}
                      className="overflow-hidden rounded-2xl glass-card"
                    >
                      <img
                        src={moment.image}
                        alt={moment.imageAlt}
                        className="w-full h-[340px] object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={imageAnimation}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.65 }}
                      className="overflow-hidden rounded-2xl glass-card"
                    >
                      <img
                        src={moment.image}
                        alt={moment.imageAlt}
                        className="w-full h-[340px] object-cover"
                        loading="lazy"
                      />
                    </motion.div>

                    <motion.article
                      initial={contentAnimation}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.65, delay: 0.1 }}
                      className="glass-card p-8"
                    >
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {moment.text}
                      </p>
                    </motion.article>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
