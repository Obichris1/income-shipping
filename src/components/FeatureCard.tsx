import React from "react";
import { motion } from "framer-motion";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number; 
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}   
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
    >
      <div className="text-cyan-500 mb-4 text-4xl">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
