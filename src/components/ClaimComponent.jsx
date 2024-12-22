import { useState } from "react";
import { motion } from "framer-motion";
import { ethers } from "ethers";

const ClaimComponent = () => {
  const [address, setAddress] = useState("");
  const [claiming, setClaiming] = useState(false);
  const [eligible, setEligible] = useState(null);
  const [amount, setAmount] = useState(0);
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    setConnecting(true);
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const addr = await signer.getAddress();
        setAddress(addr);
        setConnected(true);
      }
    } catch (error) {
      console.error(error);
    }
    setConnecting(false);
  };

  const checkEligibility = async () => {
    if (!connected) return;
    try {
      // Mock eligibility check - replace with actual contract call
      setEligible(true);
      setAmount(5000);
    } catch (error) {
      console.error(error);
      setEligible(false);
    }
  };

  const handleClaim = async () => {
    if (!connected) return;
    setClaiming(true);
    try {
      // Mock claim function - replace with actual contract call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setClaiming(false);
    } catch (error) {
      console.error(error);
      setClaiming(false);
    }
  };

  return (
    <div className="py-20 bg-[#0A0F1C]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto glassmorphism rounded-2xl border border-white/5 overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Claim your $PERY
          </h2>

          {!connected ? (
            <motion.button
              onClick={connectWallet}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-[#4E35FF] text-white rounded-xl font-semibold"
            >
              Connect Wallet
            </motion.button>
          ) : (
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-gray-400 text-sm mb-1">Your Address</p>
                <p className="text-white font-mono">{`${address.slice(0,6)}...${address.slice(-4)}`}</p>
              </div>

              {eligible === true && (
                <div className="bg-white/5 rounded-xl p-6 text-center">
                  <p className="text-gray-400 mb-2">Eligible Amount</p>
                  <div className="text-4xl font-bold text-[#4E35FF]">5,000 PERY</div>
                </div>
              )}

              <motion.button
                onClick={handleClaim}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#4E35FF] text-white rounded-xl font-semibold"
              >
                {claiming ? "Claiming..." : "Claim $PERY"}
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ClaimComponent;