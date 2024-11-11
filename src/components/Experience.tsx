const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-6 md:px-20 bg-accent text-primary"
    >
      <h2 className="text-3xl font-semibold text-center mb-6">Experience</h2>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h3 className="text-xl font-semibold">
            Software Engineer at XYZ Corp
          </h3>
          <p className="mt-2">Jan 2022 - Present</p>
          <ul className="mt-4 list-disc pl-6">
            <li>Developed a full-stack application using React and Node.js</li>
            <li>
              Collaborated with cross-functional teams to deliver high-quality
              products
            </li>
            <li>
              Improved the performance of the existing codebase by optimizing
              API calls
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">
            Frontend Developer at ABC Ltd.
          </h3>
          <p className="mt-2">Jul 2020 - Dec 2021</p>
          <ul className="mt-4 list-disc pl-6">
            <li>Built responsive UI components using React and Tailwind CSS</li>
            <li>
              Worked with the design team to implement the product’s visual
              design
            </li>
            <li>Mentored junior developers on React best practices</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
