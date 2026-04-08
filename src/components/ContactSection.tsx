import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-secondary/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 font-body">Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">Find Us Here</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="text-primary" size={22} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">Address</h3>
              <p className="text-muted-foreground font-body">ul. Vitosha 42, Sofia 1000, Bulgaria</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="text-primary" size={22} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">Phone</h3>
              <p className="text-muted-foreground font-body">+359 2 987 6543</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="text-primary" size={22} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">Working Hours</h3>
              <div className="text-muted-foreground font-body space-y-1">
                <p>Mon – Thu: 11:00 – 23:00</p>
                <p>Fri – Sat: 11:00 – 01:00</p>
                <p>Sunday: 12:00 – 22:00</p>
              </div>
            </div>
          </div>

          <a
            href="tel:+35929876543"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity font-body"
          >
            Reserve Table
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-card min-h-[350px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.7!2d23.3219!3d42.6951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8568!2sVitosha+Blvd%2C+Sofia!5e0!3m2!1sen!2sbg!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 350 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Urban Fork location on Google Maps"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
