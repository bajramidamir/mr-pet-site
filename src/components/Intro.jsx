const Intro = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row mb-16 py-8 md:py-16 px-4 md:px-16 lg:px-24 background-image">
      <div className="flex-1 flex items-center px-4 md:px-8 justify-center">
        <img
          src="/images/intro.png"
          alt="Happy Owner!"
          className="w-full md:w-auto h-auto max-w-xs md:max-w-full"
        />
      </div>
      <div className="flex-1 flex items-center">
        <div className="px-4 md:px-8 text-center">
          <h1 className="text-accent text-2xl md:text-7xl font-bold mb-4 md:mb-8">
            Sretan ljubimac, sretan vlasnik!
          </h1>
          <p className="text-lg md:text-xl">
            Naša klinika je posvećena pružanju vrhunske <br /> veterinarske
            njege za vaše ljubimce.
          </p>
          <br />
          <p className="text-lg md:text-xl">
            Naš tim stručnjaka koristi najnovije tehnologije i metode kako bi{" "}
            <br /> osigurao da vašem ljubimcu pruži najbolju moguću njegu i
            pažnju.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
