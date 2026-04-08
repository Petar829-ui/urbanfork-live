import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Urban Fork restaurant dishes"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/60" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 leading-tight"
      >
        Urban Fork
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
          className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
        >
          Explore Menu
        </a>
        <a
          href="#contact"
          className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary-foreground/10 transition-colors"
        >
          Reserve Table
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
