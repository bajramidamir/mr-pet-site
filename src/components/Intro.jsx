const Intro = () => {
  return (
    <div className="flex mb-16 py-16 px-8 md:px-16 lg:px-24">
      <div className="flex-1 flex items-center px-8 justify-center">
        <img
          src="/images/intro.png"
          alt="Happy Owner!"
          className="w-auto h-auto"
        />
      </div>
      <div className="flex-1 flex items-center">
        <div className="px-8 text-center">
          <h1 className="text-accent md:text-7xl text-3xl font-bold mb-8">
            Sretan ljubimac, sretan vlasnik!
          </h1>
          <p className="text-xl">
            Nasa klinika je posvecena pruzanju vrhunske veterinarske njege za
            vase ljubimce.
          </p>
          <br />
          <p className="text-xl">
            Nas tim strucnjaka koristi najnovije tehnologije i metode kako bi
            osigurao da vasem ljubimcu pruzi najbolju mogucu njegu i paznju.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
