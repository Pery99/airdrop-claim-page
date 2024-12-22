import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWeb3React } from "@web3-react/core";

const Header = () => {
  const { active, account, activate } = useWeb3React();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const connectWallet = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50"
    >
      <nav className="glassmorphism border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-display"
            >
              AirdropClaim
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Airdrop", "Timeline", "Team"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ y: -2 }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={connectWallet}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                {active
                  ? `${account.substring(0, 6)}...${account.substring(
                      account.length - 4
                    )}`
                  : "Connect Wallet"}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 space-y-4"
              >
                <a
                  href="#about"
                  className="block hover:text-primary transition-colors"
                >
                  About
                </a>
                <a
                  href="#airdrop"
                  className="block hover:text-primary transition-colors"
                >
                  Airdrop
                </a>
                <a
                  href="#timeline"
                  className="block hover:text-primary transition-colors"
                >
                  Timeline
                </a>
                <a
                  href="#team"
                  className="block hover:text-primary transition-colors"
                >
                  Team
                </a>
                <button
                  onClick={connectWallet}
                  className="w-full bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors"
                >
                  {active
                    ? `${account.substring(0, 6)}...${account.substring(
                        account.length - 4
                      )}`
                    : "Connect Wallet"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
