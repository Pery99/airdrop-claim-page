import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWeb3React } from "@web3-react/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { active, account, activate } = useWeb3React();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Claim", href: "/claim" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Team", href: "/team" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 glassmorphism border-b border-white/5"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <motion.div 
              className="text-2xl font-bold font-display"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-[#4E35FF] to-[#8A6AFF] bg-clip-text text-transparent">
                $PERY
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.href}>
                <motion.span
                  whileHover={{ y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="primary-button"
            >
              {active ? 
                `${account?.slice(0,6)}...${account?.slice(-4)}` : 
                "Connect Wallet"
              }
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4"
            >
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-gray-400 hover:text-white transition-colors"
                  whileHover={{ x: 4 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 px-6 py-3 bg-[#4E35FF] text-white rounded-xl font-medium hover:bg-[#3A25CC] transition-colors"
              >
                {active ? 
                  `${account?.slice(0,6)}...${account?.slice(-4)}` : 
                  "Connect Wallet"
                }
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
