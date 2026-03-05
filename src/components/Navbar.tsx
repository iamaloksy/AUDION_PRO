import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseBusiness,
  Compass,
  Home,
  Images,
  Info,
  Menu,
  MessageSquareQuote,
  Phone,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";

const sectionLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
];

const pageLinks = [
  { label: "Home", to: "/" },
  { label: "Our Journey", to: "/journey" },
  { label: "Our Services", to: "/services" },
 
];

const brands = [
  { name: "AUDION PRO", tagline: "Original", logo: logo1 },
  { name: "DESI BEAT", tagline: "Evolved", logo: logo2 },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [brandIndex, setBrandIndex] = useState(0);
  const isHomePage = location.pathname === "/";
  const resolveSectionHref = (href: string) => (isHomePage ? href : `/${href}`);

  const mobileItems = [
    { label: "Home", href: resolveSectionHref("#home"), icon: Home },
    { label: "Services", to: "/services", icon: BriefcaseBusiness },
    { label: "Journey", to: "/journey", icon: Compass },
    { label: "About", href: resolveSectionHref("#about"), icon: Info },
    { label: "Portfolio", href: resolveSectionHref("#portfolio"), icon: Images },
    {
      label: "Testimonials",
      href: resolveSectionHref("#testimonials"),
      icon: MessageSquareQuote,
    },
    { label: "Contact", href: resolveSectionHref("#contact"), icon: Phone },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBrandIndex((prev) => (prev + 1) % brands.length);
    }, 3000);
    return () => clearInterval(interval);
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
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={brandIndex}
                initial={{ opacity: 0, scale: 0.9, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 15 }}
                transition={{ duration: 0.35 }}
                className="h-16 w-16 md:h-16 md:w-16 rounded-full bg-background/30 backdrop-blur-md border border-primary/40 flex items-center justify-center red-glow overflow-hidden transition-all duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <img
                  src={brands[brandIndex]?.logo ?? logo1}
                  alt=""
                  className="h-14 w-14 md:h-14 md:w-14 object-cover rounded-full"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={brandIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col leading-none"
              >
                <span className="font-display text-xl tracking-wider gold-text">
                  {brands[brandIndex].name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {brands[brandIndex].tagline}
                </span>
              </motion.div>
            </AnimatePresence>
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
              className="absolute inset-0 bg-background/70 backdrop-blur-md"
              onClick={() => setMobileOpen(false)}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-72 h-72">
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="absolute inset-0 rounded-full bg-background/85 backdrop-blur-xl border border-border shadow-2xl"
                />

                {mobileItems.map((item, i, items) => {
                  const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
                  const radius = 112;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      aria-label={item.label}
                      className="social-icon absolute left-1/2 top-1/2 -ml-6 -mt-6 flex flex-col gap-1"
                      initial={{ opacity: 0, scale: 0.7, x: 0, y: 0 }}
                      animate={{ opacity: 1, scale: 1, x, y }}
                      exit={{ opacity: 0, scale: 0.7, x: 0, y: 0 }}
                      transition={{ type: "spring", stiffness: 520, damping: 32, delay: i * 0.03 }}
                      title={item.label}
                    >
                      {"to" in item ? (
                        <Link to={item.to} onClick={() => setMobileOpen(false)} aria-label={item.label}>
                          <Icon size={20} />
                        </Link>
                      ) : (
                        <a href={item.href} onClick={() => setMobileOpen(false)} aria-label={item.label}>
                          <Icon size={20} />
                        </a>
                      )}
                    </motion.div>
                  );
                })}

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg red-glow transition-transform active:scale-95"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
