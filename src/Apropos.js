import { useEffect } from "react";
import { gsap } from "gsap";

function About() {
  return (
    <div className="p-10">
      <h1 className="about-title text-4xl font-bold text-red-400">A propos</h1>
      <p className="about-content mt-4 text-md">
        Bonjour et bienvenue ! Passionnée par la technologie et le design, je suis développeur full stack avec un attrait particulier pour les interfaces intuitives et esthétiques. Curieuse de nature, j’aime apprendre de nouvelles technologies comme JavaScript et ses frameworks, tout en cultivant mon sens du détail grâce à ma formation initiale en chimie industrielle. Cette double compétence me permet d’allier rigueur scientifique et créativité dans mes projets.
      </p>
    </div>
  );
}

export default About;