import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/audionpro_", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@desibeatentertainers?si=9w9P_Sgx--s80QPY", label: "YouTube" },
  { icon: MessageCircle, href: "https://wa.me/15551234567?text=Hi%2C%20I%20want%20to%20book%20a%20DJ%20event.", label: "WhatsApp" },
];

const SocialSidebar = () => {
  return (
    <div className="fixed left-2 md:left-4 inset-y-0 z-40 flex items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative flex flex-col gap-4"
      >
        {socials.map((social, i) => (
          <motion.a
            key={social.label}
            href={social.href}
            className="social-icon"
            aria-label={social.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-px h-16 bg-accent/30" />
      </motion.div>
    </div>
  );
};

export default SocialSidebar;
