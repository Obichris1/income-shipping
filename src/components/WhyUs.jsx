import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/hero.jpg"; // Replace with your image path


const whyChooseUs = [
  { title: "Proven Expertise", desc: "Deep shipping, marine, and oil services knowledge." },
  { title: "End-to-End Solutions", desc: "From sourcing to logistics, we streamline operations." },
  { title: "Uncompromising Integrity", desc: "Transparency and compliance in every deal." },
  { title: "Reliable Delivery", desc: "Timely execution and robust supply chains." },
  { title: "Strategic Vision", desc: "Focused on future opportunities in energy and infrastructure." },
  { title: "Global Outlook, Local Strength", desc: "Blending global standards with local expertise." },
  { title: "Safety & Sustainability", desc: "Committed to safety, environment, and stewardship." },
];

const WhyUs = () => {
  return (
    <div className="py-16 bg-white space-y-20">
      {/* Objectives Section */}
    

   
      {/* Why Choose Us Section */}
      <section id="why-us" className="w-[95%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Us?</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
