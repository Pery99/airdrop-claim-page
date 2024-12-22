import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Teams = () => {
  const team = [
    {
      name: "Oluwapelumi Adelabu",
      role: "Founder & CEO",
      image: "ceo.jpg", 
      description: "CEO, Dev",
    },
    {
      name: "Pizzy Joshua",
      role: "Lead Developer",
      image: "/pizzy.jpg",
      description: "Blockchain architect, Smart contract specialist",
    },
    {
      name: "George Mazi",
      role: "Head of Growth",
      image: "/George.jpg",
      description: "Marketing expert, Community builder",
    },
  ];

  return (
    <section className="py-20 gradient-bg relative">
      <motion.div 
        className="absolute inset-0"
        animate={{
          backgroundImage: [
            "radial-gradient(circle at 20% 20%, rgba(78, 53, 255, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(78, 53, 255, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 gradient-text font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-[#4E35FF] to-[#8A6AFF] bg-clip-text text-transparent">
            Core Team
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glassmorphism rounded-2xl p-6 border border-white/5"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-[#4E35FF] rounded-full opacity-20 blur-xl" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full relative z-10 border-2 border-[#4E35FF]/50"
                />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                {member.name}
              </h3>
              <div className="text-[#4E35FF] text-center mb-4">{member.role}</div>
              <p className="text-gray-400 text-center text-sm">
                {member.description}
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#twitter"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4E35FF]/20 transition-colors text-gray-400 hover:text-white"
                >
                  <FaTwitter size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#linkedin"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4E35FF]/20 transition-colors text-gray-400 hover:text-white"
                >
                  <FaLinkedinIn size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="#github"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4E35FF]/20 transition-colors text-gray-400 hover:text-white"
                >
                  <FaGithub size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
