const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-6 md:px-20 bg-primary text-accent"
    >
      <h2 className="text-3xl font-semibold text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-accent p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-primary">Project 1</h3>
          <p className="mt-4 text-primary">
            A brief description of Project 1 goes here. It's a web app built
            using React and Next.js.
          </p>
          <div className="mt-6 flex justify-between text-primary">
            <a href="#" target="_blank" className="hover:text-secondary">
              View Demo
            </a>
            <a href="#" target="_blank" className="hover:text-secondary">
              GitHub
            </a>
          </div>
        </div>
        {/* Project 2 */}
        <div className="bg-accent p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-primary">Project 2</h3>
          <p className="mt-4 text-primary">
            A brief description of Project 2 goes here. It's a full-stack app
            built with Next.js and Node.js.
          </p>
          <div className="mt-6 flex justify-between text-primary">
            <a href="#" target="_blank" className="hover:text-secondary">
              View Demo
            </a>
            <a href="#" target="_blank" className="hover:text-secondary">
              GitHub
            </a>
          </div>
        </div>
        {/* Project 3 */}
        <div className="bg-accent p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-semibold text-primary">Project 3</h3>
          <p className="mt-4 text-primary">
            A brief description of Project 3 goes here. It’s an open-source tool
            built with React and TypeScript.
          </p>
          <div className="mt-6 flex justify-between text-primary">
            <a href="#" target="_blank" className="hover:text-secondary">
              View Demo
            </a>
            <a href="#" target="_blank" className="hover:text-secondary">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
