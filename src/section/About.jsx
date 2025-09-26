import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/img2.jpg"; // Replace with your image path
import visionImg from "../assets/img3.jpg"; // Replace with your vision image path

const objectives = [
  "Engage in shipping and marine operations across upstream, midstream, and downstream sectors.",
  "Design, construct, and maintain oil & gas, energy, and agro-allied infrastructure.",
  "Operate as a full-service shipping company offering logistics, warehousing, and cargo handling.",
  "Provide reliable marine transportation routes for goods, passengers, and bulk commodities.",
  "Supply and manage shipping equipment, tools, and machinery for oil and gas operations.",
  "Offer freight forwarding, stevedoring, contracting, and offshore port services.",
  "Acquire strategic assets like land, mineral rights, pipelines, and concessions locally and abroad.",
  "Deliver consultancy, charter brokerage, cargo supervision, and maritime project management.",
  "Support commercial activities such as technical consultancy, cargo management, and fleet maintenance.",
  "Repair, maintain, and upgrade vessels, engines, and maritime equipment."
];

const vision = [
  "To become a leading force in global maritime logistics delivering seamless, safe, and reliable shipping solutions across Africa and beyond.",
  "Integrity: Upholding the highest standards of honesty and accountability in all operations.",
  "Operational Excellence: Committed to efficiency, precision, and continuous improvement.",
  "Safety First: Prioritizing people, environment, and assets with strict compliance to standards.",
  "Innovation & Adaptability: Embracing new technologies and strategies for evolving market needs.",
  "Reliability: Ensuring consistent, timely, and high-quality service delivery worldwide.",
  "Strategic Growth: Expanding sustainably while reinforcing our core strengths.",
  "Collaboration: Building lasting relationships through transparency, teamwork, and shared success."
];

const About = () => {
  return (
    <section id="about" className="py-8 bg-white space-y-12  md:space-y-24">
        <h1 className="text-center text-2xl md:text-3xl font-bold">ABOUT US</h1>
      {/* Objectives Section */}
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-5 ">Our Objectives</h2>
          {/* <p className="text-black font-bold md:text-lg mb-6 leading-7">
            At the heart of our operations lies a diverse and dynamic mission,
            rooted in the foundational purposes for which the company was established. 
            These objectives guide our activities across the oil and gas, maritime, and energy industries:
          </p> */}
          <ul className="list-disc list-inside md:text-base space-y-3 text-gray-700">
            {objectives.map((obj, idx) => (
              <li key={idx} className="leading-7 md:text-lg  mb-5">{obj}</li>
            ))}
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImg}
            alt="Objectives"
            className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
          />
        </motion.div>
      </div>

      {/* Vision Section */}
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={visionImg}
            alt="Vision"
            className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-5">Our Vision</h2>
          {/* <p className="mb-6 font-bold md:text-lg leading-7">
            Our vision drives us to redefine excellence in maritime, oil, and gas operations 
            while building a sustainable and innovative future. It is anchored on the following pillars:
          </p> */}
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            {vision.map((v, idx) => (
              <li key={idx} className="leading-7  mb-5  md:text-lg">{v}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
