import { useState } from "react";
import { motion } from "framer-motion";
import burgerImg from "@/assets/food-burger.jpg";
import pastaImg from "@/assets/food-pasta.jpg";
import saladImg from "@/assets/food-salad.jpg";
import drinksImg from "@/assets/food-drinks.jpg";
import MenuBg from "@/assets/MenuTableBG.jpg";
import BurgerIcon from "@/assets/burger-icon.svg";
import DrinkIcon from "@/assets/drink-icon.svg";
import PastaIcon from "@/assets/pasta-icon.svg";

const categories = [
  {
    name: "Burgers",
    image: burgerImg,
    items: [
      { name: "Classic Smash Burger", price: "7.60", desc: "Double patty, aged cheddar, caramelized onions" },
      { name: "Truffle Burger", price: "9.50", desc: "Truffle aioli, swiss cheese, arugula" },
      { name: "BBQ Bacon Beast", price: "8.65", desc: "Smoky BBQ sauce, crispy bacon, jalapeños" },
    ],
  },
  {
    name: "Pasta",
    image: pastaImg,
    items: [
      { name: "Spaghetti Bolognese", price: "6.90", desc: "Slow-cooked beef ragù, parmesan" },
      { name: "Truffle Carbonara", price: "8.15", desc: "Guanciale, egg yolk, black truffle" },
      { name: "Pesto Linguine", price: "6.50", desc: "Fresh basil pesto, pine nuts, cherry tomatoes" },
    ],
  },
  {
    name: "Salads",
    image: saladImg,
    items: [
      { name: "Mediterranean Bowl", price: "6.10", desc: "Feta, olives, avocado, cherry tomatoes" },
      { name: "Caesar Salad", price: "5.40", desc: "Grilled chicken, croutons, parmesan dressing" },
      { name: "Quinoa Power Bowl", price: "6.40", desc: "Roasted veggies, hummus, tahini drizzle" },
    ],
  },
  {
    name: "Drinks",
    image: drinksImg,
    items: [
      { name: "Urban Mule", price: "4.90", desc: "Vodka, ginger beer, lime, rosemary" },
      { name: "Craft Lemonade", price: "3.00", desc: "Fresh lemon, elderflower, sparkling water" },
      { name: "Espresso Martini", price: "5.60", desc: "Vodka, espresso, coffee liqueur" },
    ],
  },
];

const MenuSection = () => {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section id="menu" className="relative py-20 md:py-28 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
      <img
        src={MenuBg}
        alt="Urban Fork restaurant dishes"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/60" />
    </div>
      <div className="container mx-auto px-4 p-8 bg-[#1a1209] md:border border-[#c8a97e]/30 relative z-5 overflow-hidden">
      <div className="relative">
  <img
    src={BurgerIcon}
    alt="BurgerIcon"
    className="absolute top-[-200px] right-[-660px] w-26 h-26 opacity-60 pointer-events-none select-none"
  />
  <img
    src={DrinkIcon}
    alt="drink-icon"
    className="absolute top-[200px] left-[-600px] w-26 h-26 opacity-60 pointer-events-none select-none"
  />
  <img
    src={PastaIcon}
    alt="drink-icon"
    className="absolute top-[-200px] left-[-670px] w-26 h-26 opacity-60 pointer-events-none select-none"
  />
</div>
      <div className="p-2 border border-[#c8a97e]/15 rounded-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-[#e8d5b5] italic tracking-wide">Our Menu</h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="block w-16 h-px bg-[#c8a97e]/50" />
            <span className="text-[#c8a97e] text-sm font-body uppercase tracking-[0.3em]">Urban </span> <span className="text-primary text-sm font-bold uppercase tracking-[0.3em]">Fork</span>
            <span className="block w-16 h-px bg-[#c8a97e]/50" />
          </div>
        </motion.div>

        <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
          {categories.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 font-body ${
                i === active
                  ? "bg-[#c8a97e]/70 text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-[#c8a97e]/10"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className="w-[450px] h-px bg-[#c8a97e]/40 mx-auto mb-6" />

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center"
        >
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-72 md:h-96 object-cover"
              loading="lazy"
              width={640}
              height={640}
            />
          </div>
          <div className="space-y-6">
            {cat.items.map((item) => (
              <div
                key={item.name}
                className="bg-foreground rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]
hover:shadow-[0_10px_16px_rgba(0,0,0,0.15)]
  transition-shadow duration-300 hover:-translate-y-0.5 transition-transform duration-200"
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-display text-lg font-semibold text-[#e8d5b5] italic tracking-wide">{item.name}</h3>
                  <span className="flex-1 border-b border-dotted border-[#c8a97e]/30 min-w-[20px] translate-y-[15px]" />
                  <span className="text-[#e8d5b5] font-bold font-body text-lg">{item.price} euro</span>
                </div>
                <p className="text-[#e8d5b5]/60 text-sm font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
