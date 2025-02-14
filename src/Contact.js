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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone,  message } = formData;

    // Validation des champs
    if (!name || !email || !phone || !message) {
      setError("Veuillez remplir tous les champs.");
      setSubmitted(false);
      return;
    }

    // Envoyer les données à l'API avec Axios
    try {
      const response = await axios.post('http://localhost:3000/api/User', formData);
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
    <div className="p-8">
      <h1 className="text-4xl font-bold text-fuchsia-700 pb-4">Contactez-moi</h1>

      <div className="flex justify-center gap-4 mt-2">
        <a href="https://github.com/LAKHMAISS-CHAIMA" target="_blank" rel="noopener noreferrer" className="text-blue text-3xl hover:text-gray-400">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://linkedin.com/in/Chaimaa-Lakhmaiss" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-3xl hover:text-blue-300">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="contact-form mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button type="submit" className="bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700">
          Submit
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {submitted && <p className="text-green-500 mt-2">Message envoyé avec succès !</p>}
    </div>
  );
}

export default Contact;