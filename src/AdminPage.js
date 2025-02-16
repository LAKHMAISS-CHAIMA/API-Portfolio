import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [contacts, setContacts] = useState([]); 
  const [loading, setLoading] = useState(true);   
  const [error, setError] = useState(null);       

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('/api/contacts'); 
        setContacts(response.data); 
        setLoading(false); 
      } catch (error) {
        setError('Erreur lors de la récupération des messages.');
        setLoading(false);
      }
    };

    fetchContacts();  
  }, []);  

  if (loading) return <div>Chargement des messages...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Page Admin - Liste des Messages</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.message}</td>
              <td>
                <button onClick={() => handleDelete(contact._id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const handleDelete = async (id) => {
  try {
    await axios.delete(`/api/contacts/${id}`);  
    alert('Message supprimé avec succès!'); 
    setContacts(prevContacts => prevContacts.filter(contact => contact._id !== id)); 
  } catch (error) {
    alert('Erreur lors de la suppression du message');
  }
};

export default AdminPage;
