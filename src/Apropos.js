import { useEffect } from "react";
import { gsap } from "gsap";

function About() {
  useEffect(() => {
    gsap.fromTo(".about-title", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    gsap.fromTo(".about-content", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" });
  }, []);

  return (
    <div className="p-10 bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col items-center justify-center transition-all duration-500">
      <h1 className="about-title text-5xl font-extrabold text-red-400 mb-6">À propos</h1>
      <p className="about-content max-w-2xl text-lg leading-relaxed text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        Bonjour et bienvenue ! Passionnée par la technologie et le design, je suis développeur full stack avec un attrait particulier pour les interfaces intuitives et esthétiques. Curieuse de nature, j’aime apprendre de nouvelles technologies comme JavaScript et ses frameworks, tout en cultivant mon sens du détail grâce à ma formation initiale en chimie industrielle. Cette double compétence me permet d’allier rigueur scientifique et créativité dans mes projets.
      </p>
    </div>
  );
}

export default About;
