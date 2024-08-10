import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="p-8 flex flex-col lg:flex-row items-center lg:items-start"
    >
      {/* Tekstualni dio */}
      <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold leading-tight mb-4">O nama</h2>
        <p className="text-neutral text-lg font-medium mb-4">
          Naša klinika je posvećena pružanju vrhunske veterinarske njege za vaše
          ljubimce. Naš tim stručnjaka koristi najnovije tehnologije i metode
          kako bi osigurao da vašem ljubimcu pruži najbolju moguću njegu i
          pažnju.
        </p>
        <p className="text-neutral text-lg font-medium">
          S ponosom smo sertifikovani i imamo dugogodišnje iskustvo u različitim
          aspektima veterinarske medicine, uključujući hitnu pomoć, preventivne
          preglede i specijalizirane tretmane.
        </p>
      </div>

      {/* Dio sa slikom */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src="/images/team.jpg"
          alt="Naš tim"
          className="max-w-md w-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutUs;
