import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const slides = [
  { src: heroSlide1, alt: "Elegant dinner table with candlelight" },
  { src: heroSlide2, alt: "Beautifully plated gourmet dish" },
  { src: heroSlide3, alt: "Expert bartender crafting a cocktail" },
  { src: heroSlide4, alt: "Open kitchen with chef preparing dishes" },
];

const INTERVAL = 5000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.img
            src={slides[current].src}
            alt={slides[current].alt}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: INTERVAL / 1000 + 1.2, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-foreground/40 z-[1]" />
    
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 leading-tight"
      >
        Urban <span className="text-primary">Fork</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-primary-foreground/80 font-body mb-8 max-w-lg mx-auto"
      >
        Where bold flavors meet good company. Craft burgers, fresh pasta & signature drinks in the heart of Sofia.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#menu"
          className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-[#C25416] active:bg-[#D97724] active:text-background hover:text-[#C0C0C0] transition-opacity hover:-translate-y-0.5 active:-translate-y-0 transition-transform duration-200"
        >
          Explore Menu
        </a>
        <a
          href="#contact"
          className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary-foreground/10 hover:text-[#C0C0C0] active:text-white active:bg-primary-foreground/40 transition-colors hover:opacity-90 transition-opacity hover:-translate-y-0.5 active:-translate-y-0 transition-transform duration-200"
        >
          Reserve Table
        </a>
      </motion.div>

       <div className="flex justify-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary-foreground w-6" : "bg-primary-foreground/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
          </div>
    </div>
  </section>
);
};

export default HeroSection;
