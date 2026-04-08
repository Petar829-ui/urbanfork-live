import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6 leading-tight">
          Reserve Your Table Today
        </h2>
        <p className="text-primary-foreground/80 font-body text-lg mb-10 max-w-lg mx-auto">
          Whether it's a casual dinner with friends or a special celebration, we've got the perfect table waiting for you.
        </p>
        <a
          href="#reservation"
          className="inline-block bg-primary-foreground text-primary px-10 py-4 rounded-full text-base font-bold font-body hover:opacity-90 transition-opacity"
        >
          Book Now
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
