import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useEffect(() => {
    gsap.from(".project-item", {
      opacity: 1, 
      y: 0, 
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      delay: 0.5,
    });

    gsap.utils.toArray(".project-item").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-fuchsia-700 pb-10">Mes projets</h1>

      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { title: "Blog", image: "blog.jpg", repo: "blog" },
          { title: "Weather App", image: "OIP.jpeg", repo: "Weather.app" },
          { title: "Calculatrice", image: "c.webp", repo: "calculatrice" },
          { title: "Gestion de Stock", image: "g.jpg", repo: "-Gestionnaire-de-Stock" },
          { title: "Portfolio", image: "2cf0zrkr.png", repo: "my_portfolio" },
        ].map((project, index) => (
          <div key={index} className="project-item card h-72 w-full overflow-hidden relative bg-gray-200 rounded-md">
            <div className="image h-full">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            </div>
            <div className="title absolute bottom-0 bg-gray-950 bg-opacity-50 w-full py-1 px-2 font-bold text-white">
              {project.title}
            </div>
            <a href={`https://github.com/LAKHMAISS-CHAIMA/${project.repo}`} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Voir plus</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
