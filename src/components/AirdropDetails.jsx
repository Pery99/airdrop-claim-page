import { motion } from "framer-motion";

const AirdropDetails = () => {
  const details = [
    {
      title: "Token Allocation",
      value: "1,000,000 TOKENS",
      description: "Total tokens allocated for airdrop distribution",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Individual Cap",
      value: "5,000 TOKENS",
      description: "Maximum tokens per eligible address",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Duration",
      value: "30 DAYS",
      description: "Time window to claim your tokens",
      color: "from-pink-500 to-red-500",
    },
    {
      title: "Vesting Period",
      value: "6 MONTHS",
      description: "Linear vesting schedule for claimed tokens",
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Airdrop Details
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="glassmorphism rounded-xl p-6 border border-white/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${detail.color} rounded-2xl blur opacity-30 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold mb-2">{detail.title}</h3>
                <div className="text-3xl font-bold text-primary mb-4">
                  {detail.value}
                </div>
                <p className="text-gray-600">{detail.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirdropDetails;
