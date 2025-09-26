import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import heroImg from "../assets/hero.jpg";
import { Link,useNavigate } from "react-router-dom";

const Hero = () => {
  const scrollToFeatures = () => {
    document
      .getElementById("")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const navigate = useNavigate()

  return (
    <section className="h-[calc(100vh-5rem)] flex flex-col md:flex-row relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" /> {/* 50% opacity */}

      {/* Content */}
      <div className="relative w-full flex flex-col gap-8 justify-center h-[90vh] px-5 md:px-10 py-12 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl md:text-2xl max-w-4xl leading-7 !text-gray-200 font-bold mt-40 md:mt-0"
        >
          Since 2008, Income Shipping and Marine Oil Services has delivered trusted chartering, brokerage, and logistics solutions—providing reliable vessels and operations with safety at the core.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mt-6"
        >
          <Button onClick={() => navigate('/about')}>Know about us</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
