import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isOpen = selectedIndex !== null;

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryImages.length);
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "auto";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeImage();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, selectedIndex]);

  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-[#C65918]/60 overflow-hidden">
      <div className="container mx-auto px-4 ">
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

            <p className="text-primary font-bold text-lg uppercase tracking-wider mb-1">
              Head Chef
            </p>
            <p className="text-foreground font-display text-lg font-semibold">
              Marco DeLuca
            </p>
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
              className="w-full h-80 md:h-[26rem] object-cover select-none"
              loading="lazy"
              draggable={false}
            />
          </motion.div>

          <img
            src={PastaIcon}
            alt=""
            draggable={false}
            className="absolute hidden lg:block top-[100px] left-[-50px] -translate-x-1/2 w-full h-[800px] opacity-80 pointer-events-none select-none"
          />

          <img
            src={BurgerIcon}
            alt=""
            draggable={false}
            className="absolute hidden lg:block top-[-200px] right-[-50px] translate-x-1/2 w-full h-[800px] opacity-80 pointer-events-none select-none"
          />

          <img
            src={DrinkIcon}
            alt=""
            draggable={false}
            className="absolute hidden lg:block top-[400px] right-[-50px] translate-x-1/2 w-full h-[800px] opacity-80 pointer-events-none select-none"
          />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              onClick={() => openImage(i)}
              className={`${img.span} rounded-xl overflow-hidden group relative text-left focus:outline-none focus:ring-2 focus:ring-primary/60`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                loading="lazy"
                draggable={false}
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <button
              type="button"
              aria-label="Close image"
              onClick={closeImage}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-3 md:left-6 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-3 md:right-6 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              key={galleryImages[selectedIndex].src}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="w-full max-h-[85vh] object-contain rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] select-none"
                draggable={false}
              />

              <div className="mt-4 text-center text-white/85 text-sm md:text-base font-body">
                {galleryImages[selectedIndex].alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;