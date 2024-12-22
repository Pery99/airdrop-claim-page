import { motion } from "framer-motion";

const Timeline = () => {
  const milestones = [
    {
      date: "Phase 1",
      title: "PERY Launch",
      description: "Initial token launch and community building",
      status: "completed",
      icon: "🚀"
    },
    {
      date: "Phase 2",
      title: "Airdrop Distribution",
      description: "Community airdrop claim period begins",
      status: "current",
      icon: "🎯"
    },
    {
      date: "Phase 3",
      title: "Exchange Listings",
      description: "Major DEX and CEX listings",
      status: "upcoming",
      icon: "📈"
    },
    {
      date: "Phase 4",
      title: "Ecosystem Growth",
      description: "DAO governance and staking launch",
      status: "upcoming",
      icon: "🌐"
    }
  ];

  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(78, 53, 255, 0.1) 0%, transparent 50%)"
        }}
      />

      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-[#4E35FF] to-[#8A6AFF] bg-clip-text text-transparent">
            Roadmap
          </span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center mb-12 relative"
            >
              <div className="w-20 h-20 shrink-0 bg-[#4E35FF]/10 rounded-2xl flex items-center justify-center text-4xl">
                {milestone.icon}
              </div>
              <motion.div 
                className="ml-6 glassmorphism p-6 rounded-2xl border border-white/5 flex-1"
                whileHover={{ y: -5 }}
              >
                <div className={`inline-block px-3 py-1 rounded-full text-sm mb-2
                  ${milestone.status === "completed" ? "bg-[#4E35FF]/20 text-[#4E35FF]" :
                    milestone.status === "current" ? "bg-[#8A6AFF]/20 text-[#8A6AFF]" :
                    "bg-gray-500/20 text-gray-400"}`}
                >
                  {milestone.date}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                <p className="text-gray-400">{milestone.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
