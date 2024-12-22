import { motion } from "framer-motion";

const LoadingScreen = () => {
  const hexagons = Array(6).fill(null);
  
  return (
    <div className="fixed inset-0 bg-[#0A0F1C] flex items-center justify-center">
      <div className="relative">
        {/* Animated Hexagon Grid */}
        <div className="absolute inset-0 flex items-center justify-center">
          {hexagons.map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-32 h-32"
              style={{
                rotate: `${index * 60}deg`,
                transformOrigin: "50% 50%"
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              <div className="w-full h-full border-2 border-[#4E35FF] rotate-45 transform origin-center" />
            </motion.div>
          ))}
        </div>

        {/* Center Logo */}
        <motion.div
          className="relative z-10 bg-[#0A0F1C] p-8 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="text-4xl font-bold gradient-text font-display">P</div>
        </motion.div>

        {/* Orbital Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#4E35FF] rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: Math.cos(i * 30) * 100,
                y: Math.sin(i * 30) * 100,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.div
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-lg text-gray-400 mb-2">Loading $PERY</div>
          <motion.div
            className="h-1 w-32 mx-auto bg-gradient-to-r from-[#4E35FF] to-[#8A6AFF] rounded-full"
            animate={{
              scaleX: [0, 1],
              opacity: [0.5, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
