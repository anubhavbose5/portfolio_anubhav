const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-primary text-accent px-4 md:px-0">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
        Hello, I&apos;m Anubhav Bose
      </h1>
      <p className="mt-4 text-lg md:text-xl lg:text-2xl">
        A Software Engineer specialized in front-end development
      </p>
      <div className="mt-8 space-x-4">
        {/* <Button className="bg-secondary text-primary hover:bg-accent transition-all duration-300 px-6 py-3 rounded-full">
          Explore My Projects
        </Button> */}
      </div>
    </section>
  );
};

export default Hero;
