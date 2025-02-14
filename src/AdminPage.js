import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/Users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error('Erreur lors de la récupération des Users :', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/Users/${id}`);
      setUsers(Users.filter((User) => User._id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression du User :', error);
    }
  };

  const filteredUsers = Users.filter((User) =>
    User.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Page Admin</h1>
      <input
        type="text"
        placeholder="Rechercher par nom"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <ul>
        {filteredContacts.map((User) => (
          <li key={User._id} className="mb-4 p-4 border rounded">
            <p><strong>Nom :</strong> {User.name}</p>
            <p><strong>Email :</strong> {User.email}</p>
            <p><strong>Phone :</strong> {User.phone}</p>
            <p><strong>Message :</strong> {User.message}</p>
            <button
              onClick={() => handleDelete(User._id)}
              className="mt-2 p-2 bg-red-500 text-white rounded"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;