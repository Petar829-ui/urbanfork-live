import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Plus, X } from "lucide-react";
import { toast } from "sonner";

interface Review {
  name: string;
  rating: number;
  text: string;
}

const defaultReviews: Review[] = [
  {
    name: "Maria K.",
    rating: 5,
    text: "Best burgers in Sofia, hands down! The truffle burger blew my mind. Great atmosphere and friendly staff.",
  },
  {
    name: "Georgi D.",
    rating: 5,
    text: "Took the family here for dinner — the kids loved the pasta and I couldn't stop ordering cocktails. Will be back!",
  },
  {
    name: "Yana P.",
    rating: 4,
    text: "Beautiful interior and amazing salads. The quinoa bowl is perfection. Only wish they had more vegan options.",
  },
  {
    name: "Alex S.",
    rating: 5,
    text: "Perfect date night spot. The espresso martini and the carbonara were both outstanding. 10/10 recommend.",
  },
  {
    name: "Dimitar N.",
    rating: 5,
    text: "The BBQ Bacon Beast is a game changer. Juicy, smoky, and absolutely massive. Worth every lev.",
  },
  {
    name: "Elena T.",
    rating: 4,
    text: "Lovely place with a cozy vibe. The craft lemonade is super refreshing. Great for casual dinners with friends.",
  },
];

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) {
      toast.error("Please fill in your name and review.");
      return;
    }
    setReviews([{ name: newName.trim(), rating: newRating, text: newText.trim() }, ...reviews]);
    toast.success("Thank you for your review!");
    setNewName("");
    setNewText("");
    setNewRating(5);
    setShowForm(false);
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 font-body">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            What Our Guests Say
          </h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold font-body hover:opacity-90 transition-opacity"
          >
            {showForm ? <X size={18} /> : <Plus size={18} />}
            {showForm ? "Cancel" : "Write a Review"}
          </button>
        </motion.div>

        <AnimatePresence>
          {showForm && (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden max-w-lg mx-auto mb-12"
            >
              <div className="bg-card rounded-2xl p-6 shadow-elevated space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground font-body">Your Name</label>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Ivan P."
                    maxLength={50}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground font-body">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setNewRating(s)}
                        onMouseEnter={() => setHoverRating(s)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-0.5"
                      >
                        <Star
                          size={24}
                          className={
                            s <= (hoverRating || newRating)
                              ? "text-primary fill-primary transition-colors"
                              : "text-border transition-colors"
                          }
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground font-body">Your Review</label>
                  <textarea
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="Tell us about your experience..."
                    maxLength={300}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-full text-sm font-semibold font-body hover:opacity-90 transition-opacity"
                >
                  Submit Review
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={`${r.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={18}
                    className={si < r.rating ? "text-primary fill-primary" : "text-border"}
                  />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                "{r.text}"
              </p>
              <p className="font-display font-semibold text-foreground">{r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
