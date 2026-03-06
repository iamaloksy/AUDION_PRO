import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import logo1 from "@/assets/logo1.png";

const FooterSection = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Journey", href: "/journey" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer id="contact" className="relative border-t border-border">
      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-background/30 backdrop-blur-md border border-primary/40 flex items-center justify-center overflow-hidden">
                <img
                  src={logo1}
                  alt="AUDION PRO logo"
                  className="w-8 h-8 object-cover rounded-full"
                  draggable={false}
                />
              </div>
              <span className="font-display text-2xl gold-text tracking-wider">AUDION PRO</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium DJ services for weddings, corporate events, festivals, and private parties.
              Elevating every moment with exceptional sound.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl tracking-wider text-foreground mb-4">
              Contact <span className="gold-text">Us</span>
            </h3>
            <div className="h-px w-12 bg-accent/50 mb-6" />
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>NA</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+91 9988931213</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>Info@audionpro.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl tracking-wider text-foreground mb-4">
              Quick <span className="gold-text">Links</span>
            </h3>
            <div className="h-px w-12 bg-accent/50 mb-6" />
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground text-sm hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
             {new Date().getFullYear()} AUDION PRO DJ Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/audionpro_" className="text-muted-foreground hover:text-accent transition-colors">
              <Instagram size={18} />
            </a>
            {/* <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Facebook size={18} />
            </a> */}
            <a href="https://youtube.com/@desibeatentertainers?si=9w9P_Sgx--s80QPY" className="text-muted-foreground hover:text-accent transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
