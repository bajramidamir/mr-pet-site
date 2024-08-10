import React from "react";

const MainSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center lg:items-start p-8 bg-gray-100 min-h-screen">
      {/* Pozadinska slika */}
      <div className="absolute inset-0">
        <img
          src="/images/main.jpg"
          alt="Pozadinska slika"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Tekstualni dio */}
      <div className="relative z-10 text-center lg:text-left lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex flex-col justify-center">
        <div className="py-16">
          {" "}
          {/* Jednaki razmaci oko teksta */}
          <h1 className="text-5xl font-bold leading-tight mb-6 text-primary">
            Brza i profesionalna{" "}
            <span className="text-accent">Veterinarska Usluga</span>
          </h1>
          <p className="text-neutral text-2xl font-medium mb-6">
            Osigurajte svojim ljubimcima najbolju njegu uz naše certificirane i
            iskusne veterinare.
          </p>
          <button className="bg-primary text-background p-4 rounded-full shadow-md transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <a href="#contact" className="text-lg font-semibold">
              Javite nam se!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
