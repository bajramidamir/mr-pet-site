import React from "react";

const services = [
  {
    title: "Vakcinacija",
    description:
      "Osigurajte zaštitu vaših ljubimaca od opasnih bolesti uz naše profesionalne vakcinacijske usluge.",
    image: "/images/vaccine.svg",
  },
  {
    title: "Sterilizacija",
    description:
      "Naše sterilizacijske usluge pomoći će u kontroliranju populacije kućnih ljubimaca i poboljšanju njihovog zdravlja.",
    image: "/images/medicine.svg",
  },
  {
    title: "Preventivni pregledi",
    description:
      "Redoviti pregledi pomažu u pravovremenom otkrivanju problema i očuvanju zdravlja vašeg ljubimca.",
    image: "/images/stethoscope.svg",
  },
];

const Services = () => {
  return (
    <section id="services" className="p-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">Naše Usluge</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative drop-shadow rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out flex flex-col items-center text-center"
          >
            <div className="absolute top-0 left-0 w-8 h-8 bg-accent rounded-tl-lg"></div>
            <div className="bg-primary rounded-full p-4 mt-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-neutral">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
