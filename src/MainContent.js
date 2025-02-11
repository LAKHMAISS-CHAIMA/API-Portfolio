import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Apropos from "./Apropos";
import Projects from "./Projects";
import Contact from "./Contact";
import PageIntro from "./PageIntro";
import gsap from "gsap";

function MainContent({ darkMode, toggleDarkMode }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const pageInfo = {
    "/about": { title: "À propos de moi", description: "Découvrez mon parcours, mes compétences et mon expérience." },
    "/projects": { title: "Mes Projets", description: "Voici quelques-uns des projets sur lesquels j'ai travaillé." },
    "/contact": { title: "Contactez-moi", description: "N'hésitez pas à me contacter pour toute collaboration ou question." },
  };

  useEffect(() => {
    gsap.fromTo(".header-nav", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });

    const navLinks = document.querySelectorAll(".nav-link");
    gsap.fromTo(navLinks, { opacity: 0, x: -50 }, { opacity: 1, x: 0, stagger: 0.2, duration: 1, ease: "power2.out" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-pink-500 to-purple-700 text-white p-4 flex justify-between items-center header-nav">
      {/* Logo */}
        <Link to="/" className="text-xl font-bold text-slate-600">MonPortfolio</Link>

        {/* Bouton menu hamburger pour mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/about" className="hover:underline nav-link">À propos</Link>
          <Link to="/projects" className="hover:underline nav-link">Projets</Link>
          <Link to="/contact" className="hover:underline nav-link">Contact</Link>
        </nav>

        {/* Bouton Dark Mode */}
        <button 
          onClick={toggleDarkMode} 
        >
          {darkMode ? '☀' : '🌙'}
        </button>
      </header>

      {/* Menu Mobile */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-blue-700`}>
        <Link to="/about" className="block px-4 py-2 hover:bg-blue-500">À propos</Link>
        <Link to="/projects" className="block px-4 py-2 hover:bg-blue-500">Projets</Link>
        <Link to="/contact" className="block px-4 py-2 hover:bg-blue-500">Contact</Link>
      </div>

      {/* Contenu Principal */}
      <main className="p-6">
        {location.pathname !== "/" && pageInfo[location.pathname] && (
          <PageIntro
            title={pageInfo[location.pathname].title}
            description={pageInfo[location.pathname].description}
          />
        )}

        <Routes>
          <Route path="/" element={
            <div className="home-content text-center mt-8">
              <img src="me.jpg" alt="me" className="h-72 w-72 rounded-full mx-auto mb-8" />
              <p className="text-fuchsia-700 font-bold">Bienvenue sur mon portfolio !</p>
                <br></br>
                <p>Je suis passionnée par le développement web et la création d'expériences utilisateur innovantes.  
À travers ce site, vous découvrirez mes projets, mes compétences et mon parcours professionnel.  
N'hésitez pas à explorer les différentes sections pour en savoir plus sur mon travail et à me contacter si vous souhaitez collaborer ou discuter de nouvelles opportunités.</p>  
            </div>
          } />
          <Route path="/about" element={<Apropos />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default MainContent;
