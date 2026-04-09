import { motion } from "framer-motion";
import interiorImg from "@/assets/gallery-interior.jpg";
import chefImg from "@/assets/gallery-chef.jpg";
import peopleImg from "@/assets/gallery-people.jpg";
import burgerImg from "@/assets/food-burger.jpg";
import drinksImg from "@/assets/food-drinks.jpg";
import pastaImg from "@/assets/food-pasta.jpg";

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#C65918]/80">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="max-w-[180px] mx-auto rounded-full border border-[#C65918] bg-[#C65918] px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white font-body mb-3">
            Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
            A Glimpse Inside
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-4 rounded-[20px] p-4">
          {/* Main gallery block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left large image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl overflow-hidden group h-full"
            >
              <img
                src={interiorImg}
                alt="Restaurant interior"
                className="w-full h-full min-h-[320px] md:min-h-[700px] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>

            {/* Right side */}
            <div className="grid grid-rows-[auto_auto] gap-4">
              {/* Top 2 small images */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 }}
                  className="rounded-2xl overflow-hidden group"
                >
                  <img
                    src={chefImg}
                    alt="Chef cooking"
                    className="w-full h-40 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.14 }}
                  className="rounded-2xl overflow-hidden group"
                >
                  <img
                    src={burgerImg}
                    alt="Gourmet burger"
                    className="w-full h-40 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              </div>

              {/* Bottom large right image */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.18 }}
                className="rounded-2xl overflow-hidden group"
              >
                <img
                  src={peopleImg}
                  alt="Friends dining"
                  className="w-full h-52 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          {/* Bottom 2 small images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[560px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="rounded-2xl overflow-hidden group"
            >
              <img
                src={pastaImg}
                alt="Pasta dish"
                className="w-full h-52 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="rounded-2xl overflow-hidden group"
            >
              <img
                src={drinksImg}
                alt="Craft cocktails"
                className="w-full h-52 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
