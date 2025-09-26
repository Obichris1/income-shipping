import React from "react";

const Clients = () => {
  const clients = [
    "NAUTICAL MARINE MANAGEMENT INDIA.",
    "UNITED FISHERIES MAURITANIA.",
    "JAMLING NIG ENTERPRISES",
    "BUNKERMAN INTERNATIONAL LIMITED.",
    "ALPHAREEL ENERGY LIMITED.",
    "OILWAYS LOGISTICS + ENERGY LIMITED.",
  ];

  return (
    <section className=" bg-gray-50 py-10 mt-10 md:px-10 px-5 text-black font-bold flex flex-col justify-center">
      <h1 className="md:text-3xl text-2xl font-bold mb-8 text-center">Our Clients</h1>
      <ul className="list-disc list-inside space-y-4 md:text-lg">
        {clients.map((client, index) => (
          <li key={index}>{client}</li>
        ))}
      </ul>
    </section>
  );
};

export default Clients;
