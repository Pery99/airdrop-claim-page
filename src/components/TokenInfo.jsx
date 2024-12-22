import { motion, useScroll, useTransform } from "framer-motion";

const TokenInfo = () => {
  const tokenMetrics = [
    { label: "Token Name", value: "PERY" },
    { label: "Token Symbol", value: "$PRY" },
    { label: "Total Supply", value: "100,000,000" },
    { label: "Initial Price", value: "$3.50" },
    { label: "Network", value: "Ethereum" },
    { label: "Token Type", value: "ERC-20" },
  ];

  const tokenDistribution = [
    { category: "Airdrop", percentage: 20 },
    { category: "Team", percentage: 15 },
    { category: "Treasury", percentage: 25 },
    { category: "Ecosystem", percentage: 40 },
  ];

  const { scrollYProgress } = useScroll();
  const rotateValue = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 cyber-grid opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
        style={{ rotate: rotateValue }}
      />
      <div className="container mx-auto px-6">
        <motion.h2 className="text-5xl font-bold text-center mb-16 gradient-text font-display">
          Token Information
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Token Metrics */}
          <motion.div 
            className="glassmorphism rounded-2xl p-8 border border-white/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Token Metrics</h3>
            <div className="space-y-4">
              {tokenMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-200 py-3"
                >
                  <span className="text-gray-600">{metric.label}</span>
                  <span className="font-semibold">{metric.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Token Distribution */}
          <motion.div 
            className="glassmorphism rounded-2xl p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Token Distribution</h3>
            <div className="space-y-4">
              {tokenDistribution.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{item.category}</span>
                    <span className="font-semibold">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary rounded-full h-2"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
