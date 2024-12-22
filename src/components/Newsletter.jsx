import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Subscribing..." });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus({
        type: "success",
        message: "Thanks for subscribing to $PERY updates!",
      });
      setEmail("");
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundImage: [
            "radial-gradient(circle at 20% 20%, rgba(78, 53, 255, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 80%, rgba(78, 53, 255, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glassmorphism rounded-2xl p-8 md:p-12 border border-white/5">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
              Stay Updated with $PERY
            </h2>
            <p className="text-gray-400 text-lg">
              Subscribe to receive the latest updates and exclusive offers
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                aria-label="Email Address"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 bg-white/5 rounded-xl border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#4E35FF] transition-colors"
                required
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-[#4E35FF] text-white rounded-xl font-semibold hover:bg-[#3A25CC] transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
                <FaPaperPlane className="text-sm" />
              </motion.button>
            </div>

            {status.message && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-center ${
                  status.type === "error"
                    ? "text-red-400"
                    : status.type === "success"
                    ? "text-green-400"
                    : "text-gray-400"
                }`}
              >
                {status.message}
              </motion.p>
            )}
          </motion.form>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-[#4E35FF]">10K+</div>
              <div className="text-gray-400">Community Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#4E35FF]">5K+</div>
              <div className="text-gray-400">Newsletter Subscribers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#4E35FF]">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#4E35FF]">100%</div>
              <div className="text-gray-400">Transparency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
