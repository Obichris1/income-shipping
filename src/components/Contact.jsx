import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-center bg-gray-50 mt-10 py-10 px-5" id="contact">
      <div className="mt-20 max-w-7xl mx-auto">
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold mb-3">Get In Touch</h3>
        <p className="mb-5 text-base font-bold">
          Want to ship or make enquiries? Contact us here!
        </p>
        <hr className="border-gray-400 mb-24 mt-14" />

        {/* Business Contact Info */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 text-left mb-8 space-y-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Email */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
            <FaEnvelope className="text-gray-600 text-xl" />
            <div className="flex flex-col">
              <a
                href="mailto:patricia@ismaos.com"
                className="hover:underline text-base md:text-lg break-words"
              >
                patricia@ismaos.com
              </a>
              <a
                href="mailto:info@ismaos.com  "
                className="text-black hover:underline text-base md:text-lg break-words"
              >
                info@ismaos.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
            <FaPhone className="text-gray-600 text-xl" />
            <div className="flex flex-col text-base md:text-lg">
              <span>+234 8034442045</span>
              <span>+234 9073260480</span>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
            <FaMapMarkerAlt className="text-gray-600 text-xl" />
            <p className="text-base md:text-lg">
              No 4, Oniru off Payne Crescent, by Eleganza bus stop, Apapa, Lagos,
              Nigeria
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
