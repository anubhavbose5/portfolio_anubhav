// import Image from "next/image";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <About />
      <Projects />
      <Experience />
      {/* Additional sections like About, Projects, Experience will be added here */}
    </div>
  );
}
