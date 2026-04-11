import { motion } from "framer-motion";
import interiorImg from "@/assets/gallery-interior.jpg";
import chefImg from "@/assets/gallery-chef.jpg";
import peopleImg from "@/assets/gallery-people.jpg";
import burgerImg from "@/assets/food-burger.jpg";
import drinksImg from "@/assets/food-drinks.jpg";
import pastaImg from "@/assets/food-pasta.jpg";
import saladImg from "@/assets/food-salad.jpg";
import PastaIcon from "@/assets/pasta-icon.svg";
import BurgerIcon from "@/assets/burger-icon.svg";
import DrinkIcon from "@/assets/drink-icon.svg";

const galleryImages = [
  { src: burgerImg, alt: "Gourmet burger", span: "col-span-1 row-span-1" },
  { src: interiorImg, alt: "Restaurant interior", span: "col-span-1 md:col-span-2 row-span-1 md:row-span-2" },
  { src: drinksImg, alt: "Craft cocktails", span: "col-span-1 row-span-1" },
  { src: pastaImg, alt: "Fresh pasta", span: "col-span-1 row-span-1" },
  { src: saladImg, alt: "Garden salad", span: "col-span-1 row-span-1" },
  { src: peopleImg, alt: "Friends dining together", span: "col-span-1 md:col-span-2 row-span-1" },
];

const GallerySection = () => (
  <section id="gallery" className="relative py-20 md:py-28 bg-[#C65918]/60 overflow-hidden">
    <div className="container mx-auto px-4">
      {/* Header area — editorial split */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3 font-body flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary" />
            Our Gallery
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-display text-foreground leading-tight mb-6">
            " Where flavors meet ambiance and every detail tells a story "
          </h2>
          <div className="w-16 h-px bg-primary/60 mb-5" />
          <p className="text-primary font-bold text-lg uppercase tracking-wider mb-1">Head Chef</p>
          <p className="text-foreground font-display text-lg font-semibold">Marco DeLuca</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl overflow-hidden shadow-elevated"
        >
          <img
            src={chefImg}
            alt="Head chef at Urban Fork"
            className="w-full h-80 md:h-[26rem] object-cover"
            loading="lazy"
          />
        </motion.div>
          <img
    src={PastaIcon}
    alt=""
    className="absolute top-[100px] left-[-50px] -translate-x-1/2 w-full h-[800px] opacity-80 pointer-events-none select-none"
  />
    <img
    src={BurgerIcon}
    alt="BurgerIcon"
    className="absolute top-[-200px] right-[-50px] translate-x-1/2 w-full h-[800px] opacity-80 pointer-events-none select-none"
  />
  <img
    src={DrinkIcon}
    alt="drink-icon"
    className="absolute top-[400px] right-0 translate-x-1/2 w-full h-[800px] opacity-0 md:opacity-80 pointer-events-none select-none"
  />
      </div>

      {/* Masonry-style photo grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-3 md:gap-4">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className={`${img.span} rounded-xl overflow-hidden group`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;