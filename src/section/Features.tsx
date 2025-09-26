import React from "react";
import FeatureCard from "../components/FeatureCard";
import {
  FaShip,
  FaCogs,
  FaUsers,
  FaShieldAlt,
  FaGasPump,
  FaHandshake,
  FaHardHat,
  FaTruck,
  FaToolbox,
  FaAnchor,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShip className="text-black" />,
    title: "Ship Bunkering",
    description: "Efficient and reliable fuel supply for vessels of all sizes."
  },
  {
    icon: <FaCogs className="text-black" />,
    title: "Marine Equipment",
    description: "Supply of high-quality marine equipment and spare parts."
  },
  {
    icon: <FaAnchor className="text-black" />,
    title: "Mooring Masters",
    description: "Expert mooring masters ensuring safe berthing and operations."
  },
  {
    icon: <FaShieldAlt className="text-black" />,
    title: "Security Agents",
    description: "Professional maritime security services to safeguard vessels."
  },
  {
    icon: <FaToolbox className="text-black" />,
    title: "Marine Engineering",
    description: "Technical support and engineering services for ship operations."
  },
  {
    icon: <FaUsers className="text-black" />,
    title: "Ship Crewing",
    description: "Provision of skilled and experienced crew for your vessels."
  },
  {
    icon: <FaGasPump className="text-black" />,
    title: "Petroleum Products",
    description: "Trading and distribution of petroleum products worldwide."
  },
  {
    icon: <FaHandshake className="text-black" />,
    title: "Brokers & Inspectors",
    description: "Trusted brokers and marine inspectors ensuring compliance."
  },
  {
    icon: <FaHardHat className="text-black" />,
    title: "Haulage Services",
    description: "Reliable logistics and haulage services for marine cargo."
  },
  {
    icon: <FaTruck className="text-black" />,
    title: "Integrated Marine Solutions",
    description: "Comprehensive support combining multiple marine services."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 mt-10  bg-gray-50">
      <div className="mx-auto px-5 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((s, idx) => (
            <FeatureCard
              key={idx}
              icon={s.icon}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
