import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#0A0F1C] flex flex-col items-center justify-center">
      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative flex flex-col items-center"
      >
        {/* Logo with Glow Effect */}
        <motion.div
          className="relative z-10"
          animate={{ 
            scale: [1, 1.05, 1],
            filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <div className="text-7xl font-bold gradient-text font-display mb-12 relative">
            $PERY
            <div className="absolute inset-0 blur-xl bg-[#4E35FF]/20" />
          </div>
        </motion.div>

        {/* Circular Progress */}
        <motion.div 
          className="w-16 h-16 rounded-full border-4 border-t-[#4E35FF] border-r-[#4E35FF]/50 border-b-[#4E35FF]/30 border-l-[#4E35FF]/10"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Status Text */}
        <motion.div
          className="mt-8 text-gray-400 text-lg font-light tracking-wider"
          animate={{
            opacity: [0.5, 1, 0.5],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          INITIALIZING
        </motion.div>

        {/* Background Gradient Orb */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#4E35FF]/10 rounded-full blur-[100px]" />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
