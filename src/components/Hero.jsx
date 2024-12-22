import { motion } from "framer-motion";
import { useWeb3React } from "@web3-react/core";

const Hero = () => {
  const { active } = useWeb3React();

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden gradient-bg">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(78, 53, 255, 0.1) 0%, rgba(0, 0, 0, 0) 50%)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 font-display bg-gradient-to-r from-[#4E35FF] to-[#8A6AFF] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            $PERY
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12">
            The next generation of decentralized finance
          </p>
          {/* <motion.button
            className="primary-button text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {active ? "Claim $PERY" : "Connect Wallet"}
          </motion.button> */}
          
          <div className="mt-16 grid grid-cols-3 gap-6">
            <motion.div 
              className="glassmorphism p-6 rounded-2xl border border-white/5"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold text-[#4E35FF]">50M</div>
              <div className="text-gray-400">Total Supply</div>
            </motion.div>
            <motion.div 
              className="glassmorphism p-6 rounded-2xl border border-white/5"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold text-[#4E35FF]">5,000</div>
              <div className="text-gray-400">$PERY per Wallet</div>
            </motion.div>
            <motion.div 
              className="glassmorphism p-6 rounded-2xl border border-white/5"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold text-[#4E35FF]">7 Days</div>
              <div className="text-gray-400">Claim Period</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
