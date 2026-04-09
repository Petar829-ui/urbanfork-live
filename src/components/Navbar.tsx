import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Menu", href: "#menu", id: "menu" },
  { label: "About", href: "#about", id: "about" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Reviews", href: "#reviews", id: "reviews" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const navbarOffset = 80;
    const sectionTop =
      section.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    setActiveSection(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setOpen(false);

    setTimeout(() => {
      scrollToSection(id);
    }, 50);
  };

  const logoColor = scrolled || open ? "text-foreground" : "text-white";
  const mobileIconColor = scrolled || open ? "text-foreground" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="h-16 md:h-20 px-6 md:px-10 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className={`font-display text-2xl font-bold tracking-tight transition-colors duration-300 ${logoColor}`}
        >
          Urban<span className="text-primary">Fork</span>
        </a>

        <div className="hidden md:flex items-center gap-3">
          {links.map((l) => {
            const isActive = activeSection === l.id;

            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.id)}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-background"
                    : "text-muted-foreground hover:bg-primary hover:text-background"
                }`}
              >
                {l.label}
              </a>
            );
          })}

          <a
            href="#reservation"
            onClick={(e) => handleNavClick(e, "reservation")}
            className="ml-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Reserve Table
          </a>
        </div>

        <button
          className={`md:hidden transition-colors duration-300 ${mobileIconColor}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          type="button"
        >
          {open ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) => {
                const isActive = activeSection === l.id;

                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.id)}
                    className={`text-base font-medium py-2 px-4 rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-background"
                        : "text-muted-foreground hover:bg-primary hover:text-background"
                    }`}
                  >
                    {l.label}
                  </a>
                );
              })}

              <a
                href="#reservation"
                onClick={(e) => handleNavClick(e, "reservation")}
                className="bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold text-center hover:opacity-90 transition-opacity"
              >
                Reserve Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;