import backgroundImage from "/images/hero.png"; // Adjust the path to where you have stored the image

const MainSection = () => {
  return (
    <section className="relative bg-primary text-white mb-16 py-16 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between h-full relative">
        {/* Left Text Content */}
        <div className="lg:w-1/2 max-w-lg z-10">
          <h1 className="text-4xl md:text-6xl font-bold">
            Vaš ljubimac je naš prioritet!
          </h1>
          <p className="mt-8 text-xl md:text-3xl">
            Brza i profesionalna veterinarska usluga!
          </p>
          <button className="mt-8 bg-red-500 text-white text-lg md:text-3xl font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition duration-300">
            Javite nam se!
          </button>
          <p className="mt-8 text-xl md:text-3xl text-neutral-300">
            Osigurajte svojim ljubimcima najbolju njegu uz naše certificirane i
            iskusne veterinare.
          </p>
        </div>

        {/* Right Image Content */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 relative">
          <img
            src={backgroundImage}
            alt="Hero"
            className="w-full h-auto lg:absolute  lg:-top-52"
            style={{ maxWidth: "600px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
