import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black md:px-10 px-5 py-7 mt-12">
      <div className="mx-auto flex flex-col md:flex-row items-center md:justify-between text-center md:text-left space-y-4 md:space-y-0">
        {/* Left */}
        <div className="font-bold text-sm uppercase text-white">
          Income Shipping marine and oil services
        </div>

        {/* Right */}
        <div className="text-white text-xs md:text-sm">
          <p>
            Copyright © {new Date().getFullYear()} Income Shipping marine and oil
            services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
