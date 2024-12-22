import { motion } from "framer-motion";
import { useWeb3React } from "@web3-react/core";

const Hero = () => {
  const { active } = useWeb3React();

  return (
    <div className="relative min-h-screen pt-24 pb-12 sm:pt-32 flex items-center overflow-hidden gradient-bg">
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 font-display bg-gradient-to-r from-[#4E35FF] to-[#8A6AFF] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            $PERY
          </motion.h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 px-2 sm:px-4">
            The next generation of decentralized finance
          </p>
          
          <div className="mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
            <motion.div 
              className="glassmorphism p-6 rounded-2xl border border-white/5"
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#4E35FF]">50M</div>
              <div className="text-sm sm:text-base text-gray-400">Total Supply</div>
            </motion.div>
            <motion.div 
              className="glassmorphism p-6 rounded-2xl border border-white/5"
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#4E35FF]">5,000</div>
              <div className="text-sm sm:text-base text-gray-400">$PERY per Wallet</div>
            </motion.div>
            <motion.div 
              className="glassmorphism p-6 rounded-2xl border border-white/5"
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#4E35FF]">7 Days</div>
              <div className="text-sm sm:text-base text-gray-400">Claim Period</div>
            </motion.div>
          </div>

          <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4 px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glassmorphism p-3 sm:p-4 rounded-xl border border-white/5"
            >
              <div className="text-base sm:text-lg text-gray-400">
                <span className="text-[#4E35FF] mr-2">•</span> No Pre-sale
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
