import { motion } from "framer-motion";
import { FaTwitter, FaDiscord, FaTelegram, FaGithub } from "react-icons/fa";
const Footer = () => {
  const socialIcons = [
    {
      name: "twitter",
      icon: <FaTwitter size={20} />,
      href: "https://x.com/theoluwa_pelumi",
    },
    { name: "discord", icon: <FaDiscord size={20} />, href: "#discord" },
    { name: "telegram", icon: <FaTelegram size={20} />, href: "#telegram" },
    {
      name: "github",
      icon: <FaGithub size={20} />,
      href: "https://github.com/pery99",
    },
  ];

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Roadmap", "Documentation", "API"],
    },
    {
      title: "Community",
      links: ["Discord", "Twitter", "Telegram", "GitHub"],
    },
    {
      title: "Resources",
      links: ["Blog", "FAQ", "Terms", "Privacy"],
    },
  ];

  return (
    <footer className="gradient-bg border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-display gradient-text">
              $PERY
            </h3>
            <p className="text-sm max-w-xs">
              Building the future of decentralized finance with innovative
              airdrop solutions.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((column, idx) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500">
            © 2024 AirdropClaim. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a
              whileHover={{ y: -2 }}
              href="#terms"
              className="text-sm text-gray-500 hover:text-white"
            >
              Terms
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#privacy"
              className="text-sm text-gray-500 hover:text-white"
            >
              Privacy
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#cookies"
              className="text-sm text-gray-500 hover:text-white"
            >
              Cookies
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
