import { useState } from "react";
import { motion } from "framer-motion";
import burgerImg from "@/assets/food-burger.jpg";
import pastaImg from "@/assets/food-pasta.jpg";
import saladImg from "@/assets/food-salad.jpg";
import drinksImg from "@/assets/food-drinks.jpg";

const categories = [
  {
    name: "Burgers",
    image: burgerImg,
    items: [
      { name: "Classic Smash Burger", price: "14.90", desc: "Double patty, aged cheddar, caramelized onions" },
      { name: "Truffle Burger", price: "18.50", desc: "Truffle aioli, swiss cheese, arugula" },
      { name: "BBQ Bacon Beast", price: "16.90", desc: "Smoky BBQ sauce, crispy bacon, jalapeños" },
    ],
  },
  {
    name: "Pasta",
    image: pastaImg,
    items: [
      { name: "Spaghetti Bolognese", price: "13.50", desc: "Slow-cooked beef ragù, parmesan" },
      { name: "Truffle Carbonara", price: "15.90", desc: "Guanciale, egg yolk, black truffle" },
      { name: "Pesto Linguine", price: "12.90", desc: "Fresh basil pesto, pine nuts, cherry tomatoes" },
    ],
  },
  {
    name: "Salads",
    image: saladImg,
    items: [
      { name: "Mediterranean Bowl", price: "11.90", desc: "Feta, olives, avocado, cherry tomatoes" },
      { name: "Caesar Salad", price: "10.50", desc: "Grilled chicken, croutons, parmesan dressing" },
      { name: "Quinoa Power Bowl", price: "12.50", desc: "Roasted veggies, hummus, tahini drizzle" },
    ],
  },
  {
    name: "Drinks",
    image: drinksImg,
    items: [
      { name: "Urban Mule", price: "9.50", desc: "Vodka, ginger beer, lime, rosemary" },
      { name: "Craft Lemonade", price: "5.90", desc: "Fresh lemon, elderflower, sparkling water" },
      { name: "Espresso Martini", price: "10.90", desc: "Vodka, espresso, coffee liqueur" },
    ],
  },
];

const MenuSection = () => {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 font-body">Our Menu</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">Taste the Difference</h2>
        </motion.div>

        <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
          {categories.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 font-body ${
                i === active
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

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
                className="bg-card rounded-xl p-5 shadow-card hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                  <span className="text-primary font-bold font-body text-lg">{item.price} лв</span>
                </div>
                <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
