const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-20 bg-accent text-primary">
      <h2 className="text-3xl font-semibold text-center mb-6">About Me</h2>
      <div className="max-w-4xl mx-auto text-lg">
        <p>
          Hello, I'm [Your Name], a passionate software engineer with a focus on
          building scalable, performant web applications. I specialize in
          front-end development and have experience working with technologies
          like React, Next.js, TypeScript, and Tailwind CSS.
        </p>
        <p className="mt-6">
          I enjoy solving complex problems and continuously learning new
          technologies to stay ahead of the curve. My goal is to create
          user-friendly, intuitive interfaces that improve user experience and
          make a positive impact.
        </p>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          <span className="p-4 bg-primary text-accent rounded-full shadow-md transform hover:scale-105 hover:bg-secondary hover:text-slate-950 transition-all duration-300">
            JavaScript
          </span>
          <span className="p-4 bg-primary text-accent rounded-full shadow-md transform hover:scale-105 hover:bg-secondary hover:text-slate-950 transition-all duration-300">
            React
          </span>
          <span className="p-4 bg-primary text-accent rounded-full shadow-md transform hover:scale-105 hover:bg-secondary hover:text-slate-950 transition-all duration-300">
            Next.js
          </span>
          <span className="p-4 bg-primary text-accent rounded-full shadow-md transform hover:scale-105 hover:bg-secondary hover:text-slate-950 transition-all duration-300">
            Tailwind CSS
          </span>
          <span className="p-4 bg-primary text-accent rounded-full shadow-md transform hover:scale-105 hover:bg-secondary hover:text-slate-950 transition-all duration-300">
            TypeScript
          </span>
          <span className="p-4 bg-primary text-accent rounded-full shadow-md transform hover:scale-105 hover:bg-secondary hover:text-slate-950 transition-all duration-300">
            Node.js
          </span>
          <span className="p-4 bg-primary text-accent rounded-full shadow-md transform hover:scale-105 hover:bg-secondary hover:text-slate-950 transition-all duration-300">
            Git
          </span>
          <span className="p-4 bg-primary text-accent rounded-full shadow-md transform hover:scale-105 hover:bg-secondary hover:text-slate-950 transition-all duration-300">
            REST APIs
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
