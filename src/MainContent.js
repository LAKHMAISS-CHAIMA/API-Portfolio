import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Apropos from "./Apropos";
import Projects from "./Projects";
import Contact from "./Contact";
import PageIntro from "./PageIntro";
import AdminPage from "./AdminPage";
import gsap from "gsap";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

function MainContent({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const pageInfo = {
    "/about": { title: "À propos de moi", description: "Découvrez mon parcours, mes compétences et mon expérience." },
    "/projects": { title: "Mes Projets", description: "Voici quelques-uns des projets sur lesquels j'ai travaillé." },
    "/contact": { title: "Contactez-moi", description: "N'hésitez pas à me contacter pour toute collaboration ou question." },
    "/adminpage": { title: "Les Messages", description: "Voir les messages envoyés." },
  };

  useEffect(() => {
    gsap.fromTo(".header-nav", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    gsap.fromTo(".nav-link", { opacity: 0, x: -30 }, { opacity: 1, x: 0, stagger: 0.15, duration: 1, ease: "power2.out" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-all duration-500">
      <header className="bg-gradient-to-r from-pink-500 to-purple-700 text-white p-4 flex justify-between items-center header-nav shadow-lg sticky top-0 z-50">
        <Link to="/" className="text-2xl font-extrabold tracking-wide text-white hover:scale-105 transition-transform">MonPortfolio</Link>
        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/about" className="nav-link hover:text-yellow-300 transition-all">À propos</Link>
          <Link to="/projects" className="nav-link hover:text-yellow-300 transition-all">Projets</Link>
          <Link to="/contact" className="nav-link hover:text-yellow-300 transition-all">Contact</Link>
          <Link to="/adminpage" className="nav-link hover:text-yellow-300 transition-all">AdminPage</Link>
        </nav>
        
        <button onClick={toggleDarkMode} className="text-2xl ml-4 hover:rotate-180 transition-transform">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-purple-800 text-white transition-all duration-300`}> 
        <Link to="/about" className="block px-4 py-2 hover:bg-purple-600">À propos</Link>
        <Link to="/projects" className="block px-4 py-2 hover:bg-purple-600">Projets</Link>
        <Link to="/contact" className="block px-4 py-2 hover:bg-purple-600">Contact</Link>
        <Link to="/adminpage" className="block px-4 py-2 hover:bg-purple-600">AdminPage</Link>
      </div>
      
      <main className="p-6">
        {location.pathname !== "/" && pageInfo[location.pathname] && (
          <PageIntro
            title={pageInfo[location.pathname].title}
            description={pageInfo[location.pathname].description}
          />
        )}

        <Routes>
          <Route path="/" element={
            <div className="text-center mt-8">
              <img src="me.jpg" alt="me" className="h-72 w-72 rounded-full mx-auto mb-8 shadow-lg hover:scale-105 transition-transform" />
              <p className="text-fuchsia-700 font-bold text-lg animate-pulse">Bienvenue sur mon portfolio !</p>
              <p className="mt-4 text-lg leading-relaxed max-w-2xl mx-auto">Je suis passionnée par le développement web et la création d'expériences utilisateur innovantes. Découvrez mes projets et compétences à travers ce site, et n'hésitez pas à me contacter pour discuter de nouvelles opportunités.</p>
            </div>
          } />
          <Route path="/about" element={<Apropos />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adminpage" element={<AdminPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default MainContent;
