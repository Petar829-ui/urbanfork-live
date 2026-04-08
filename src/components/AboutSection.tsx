import { motion } from "framer-motion";
import interiorImg from "@/assets/gallery-interior.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-secondary/50">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-elevated"
        >
          <img
            src={interiorImg}
            alt="Urban Fork restaurant interior"
            className="w-full h-80 md:h-[28rem] object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 font-body">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            More Than Just a Meal
          </h2>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>
              Born in the vibrant streets of Sofia, Urban Fork is where bold culinary ideas meet 
              a warm, inviting atmosphere. We believe great food should be an experience — not just a plate.
            </p>
            <p>
              Our kitchen team crafts every burger, pasta, and cocktail from scratch using locally 
              sourced ingredients and recipes inspired by global street food culture. Whether you're 
              here for a family dinner or a night out with friends, there's always a seat at our table.
            </p>
            <p>
              With exposed brick walls, Edison bulb lighting, and a buzzing open kitchen, Urban Fork 
              is designed to make you feel right at home — with food that surprises you every time.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
