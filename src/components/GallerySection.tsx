import { motion } from "framer-motion";
import interiorImg from "@/assets/gallery-interior.jpg";
import chefImg from "@/assets/gallery-chef.jpg";
import peopleImg from "@/assets/gallery-people.jpg";
import burgerImg from "@/assets/food-burger.jpg";
import drinksImg from "@/assets/food-drinks.jpg";

const topImages = [
  { src: chefImg, alt: "Chef cooking" },
  { src: burgerImg, alt: "Gourmet burger" },
  { src: peopleImg, alt: "Friends dining" },
  { src: drinksImg, alt: "Craft cocktails" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 font-body">Gallery</p>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">A Glimpse Inside</h2>
      </motion.div>

      <div className="max-w-6xl mx-auto space-y-4">
        {/* Top row: 4 small photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {topImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl overflow-hidden group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom: 1 large centered photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="rounded-2xl overflow-hidden group w-full md:w-3/4 lg:w-2/3">
            <img
              src={interiorImg}
              alt="Restaurant interior"
              className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default GallerySection;
