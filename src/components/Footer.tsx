import { Globe, Heart, MessageCircle, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">
            Urban<span className="text-primary">Fork</span>
          </h3>
          <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
            Where bold flavors meet good company. Craft burgers, fresh pasta & signature drinks in the heart of Sofia.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
          <div className="space-y-3 text-primary-foreground/60 font-body text-sm">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>ul. Vitosha 42, Sofia 1000, Bulgaria</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary flex-shrink-0" />
              <a href="tel:+35929876543" className="hover:text-primary transition-colors">+359 2 987 6543</a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Working Hours</h4>
          <div className="space-y-2 text-primary-foreground/60 font-body text-sm">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary flex-shrink-0" />
              <span>Mon – Thu: 11:00 – 23:00</span>
            </div>
            <p className="pl-6">Fri – Sat: 11:00 – 01:00</p>
            <p className="pl-6">Sunday: 12:00 – 22:00</p>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {[
              { icon: Heart, label: "Instagram", href: "#" },
              { icon: Globe, label: "Facebook", href: "#" },
              { icon: MessageCircle, label: "Twitter", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-primary-foreground/40 font-body text-xs mt-4">
            @urbanfork.sofia
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="text-primary-foreground/40 text-sm font-body">
          © 2026 Urban Fork. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
