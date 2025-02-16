import { useState, useEffect } from "react";
import axios from 'axios';
import { gsap } from "gsap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    gsap.fromTo(".contact-title", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    gsap.fromTo(".contact-form", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setError("Veuillez remplir tous les champs.");
      setSubmitted(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/contacts', formData);
      if (response.status === 201) {
        setSubmitted(true);
        setError("");
        console.log("Données envoyées avec succès :", response.data);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setError("Une erreur est survenue lors de l'envoi du message.");
      setSubmitted(false);
    }
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col items-center justify-center transition-all duration-500">
      <h1 className="contact-title text-5xl font-extrabold text-fuchsia-700 pb-4">Contactez-moi</h1>

      <div className="flex justify-center gap-4 mt-2">
        <a href="https://github.com/LAKHMAISS-CHAIMA" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white text-3xl hover:text-gray-400">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://linkedin.com/in/Chaimaa-Lakhmaiss" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-3xl hover:text-blue-300">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="contact-form mt-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">Nom</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-white">Téléphone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} className="mt-1 p-2 w-full border rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>

        <button type="submit" className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition duration-300">
          Envoyer
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {submitted && <p className="text-green-500 mt-2">Message envoyé avec succès !</p>}
    </div>
  );
}

export default Contact;
