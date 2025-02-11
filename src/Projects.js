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
        <div className="project-item card h-72 w-full overflow-hidden relative bg-gray-200 bg-opacity-100 brightness-100 rounded-md">
          <div className="image h-full">
            <img src="blog.jpg" alt="Blog" className="h-full w-full object-cover" />
          </div>
          <div className="title absolute bottom-0 bg-gray-950 bg-opacity-50 w-full py-1 px-2 font-bold rounded-sm shadow-md text-white">
            Blog
          </div>
          <a href="https://github.com/LAKHMAISS-CHAIMA/blog" target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Voir plus</button>
        </a>
        </div>

        <div className="project-item card h-72 w-full overflow-hidden relative bg-gray-200 bg-opacity-100 brightness-100 rounded-md">
          <div className="image h-full">
            <img src="OIP.jpeg" alt="Weather App" className="h-full w-full object-cover" />
          </div>
          <div className="title absolute bottom-0 bg-gray-950 bg-opacity-50 w-full py-1 px-2 font-bold rounded-sm shadow-md text-white">
            Weather App
          </div>
          <a href="https://github.com/LAKHMAISS-CHAIMA/Weather.app" target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Voir plus</button>
        </a>
        </div>

        <div className="project-item card h-72 w-full overflow-hidden relative bg-gray-200 bg-opacity-100 brightness-100 rounded-md">
          <div className="image h-full">
            <img src="c.webp" alt="Calculatrice" className="h-full w-full object-cover" />
          </div>
          <div className="title absolute bottom-0 bg-gray-950 bg-opacity-50 w-full py-1 px-2 font-bold rounded-sm shadow-md text-white">
            Calculatrice
          </div>
          <a href="https://github.com/LAKHMAISS-CHAIMA/calculatrice" target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Voir plus</button>
        </a>
        </div>

        <div className="project-item card h-72 w-full overflow-hidden relative bg-gray-200 bg-opacity-100 brightness-100 rounded-md">
          <div className="image h-full">
            <img src="g.jpg" alt="Gestion de Stock" className="h-full w-full object-cover" />
          </div>
          <div className="title absolute bottom-0 bg-gray-950 bg-opacity-50 w-full py-1 px-2 font-bold rounded-sm shadow-md text-white">
            Gestion de Stock
          </div>
          <a href="https://github.com/LAKHMAISS-CHAIMA/-Gestionnaire-de-Stock" target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Voir plus</button>
        </a>
        </div>

        <div className="project-item card h-72 w-full overflow-hidden relative bg-gray-200 bg-opacity-100 brightness-100 rounded-md">
          <div className="image h-full">
            <img src="2cf0zrkr.png" alt="Portfolio" className="h-full w-full object-cover" />
          </div>
          <div className="title absolute bottom-0 bg-gray-950 bg-opacity-50 w-full py-1 px-2 font-bold rounded-sm shadow-md text-white">
            Portfolio
          </div>
          <a href="https://github.com/LAKHMAISS-CHAIMA/my_portfolio" target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Voir plus</button>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;