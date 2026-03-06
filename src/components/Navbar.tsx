import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo1 from "@/assets/logo1.png";

const sectionLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
];

const pageLinks = [
  { label: "Home", to: "/" },
  { label: "Our Journey", to: "/journey" },
  { label: "Our Services", to: "/services" },
 
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHomePage = location.pathname === "/";
  const resolveSectionHref = (href: string) => (isHomePage ? href : `/${href}`);

  const mobileItems = [
    { label: "Home", href: resolveSectionHref("#home") },
    { label: "Services", to: "/services" },
    { label: "Journey", to: "/journey" },
    { label: "About", href: resolveSectionHref("#about") },
    { label: "Portfolio", href: resolveSectionHref("#portfolio") },
    { label: "Testimonials", href: resolveSectionHref("#testimonials") },
    { label: "Contact", href: resolveSectionHref("#contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[120] transition-all duration-500 ${
          scrolled ? "glass-nav shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
          {/* Logo */}
          <a href={resolveSectionHref("#home")} className="flex items-center gap-3 group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="h-16 w-16 md:h-16 md:w-16 rounded-full bg-background/30 backdrop-blur-md border border-primary/40 flex items-center justify-center red-glow overflow-hidden transition-all duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <img
                src={logo1}
                alt="AUDION PRO logo"
                className="h-14 w-14 md:h-14 md:w-14 object-cover rounded-full"
                draggable={false}
              />
            </motion.div>

            <span className="company-name-font text-xl gold-text">AUDION PRO</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {pageLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}

            {sectionLinks.map((link) => (
              <a
                key={link.label}
                href={resolveSectionHref(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}

            {/* <a
              href="https://wa.me/15551234567?text=Hi%2C%20I%20want%20to%20book%20a%20DJ%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:red-glow hover:scale-105"
            >
              Book Now
            </a> */}
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-foreground p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (rendered outside nav so fixed is viewport-relative) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="md:hidden fixed inset-0 z-[200]"
          >
            <div
              className="absolute inset-0 bg-background/55 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.22 }}
              className="absolute top-24 left-4 right-4 rounded-2xl glass-card border gold-border shadow-2xl p-5"
            >
              <div className="flex flex-col gap-4">
                {mobileItems.map((item) => (
                  "to" in item ? (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="px-2 py-2 rounded-lg text-sm font-semibold tracking-wide uppercase text-foreground/90 hover:text-accent hover:bg-background/30 transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-2 py-2 rounded-lg text-sm font-semibold tracking-wide uppercase text-foreground/90 hover:text-accent hover:bg-background/30 transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  )
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
