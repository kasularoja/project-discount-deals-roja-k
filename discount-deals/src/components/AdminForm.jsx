import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deals, setDeals] = useState([]);
  const navigate = useNavigate();

  // Redirect if not admin
  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      alert('Access denied: Admins only');
      navigate('/login');
    }
  }, [navigate]);

  // Load saved deals
  useEffect(() => {
    const savedDeals = JSON.parse(localStorage.getItem('deals')) || [];
    setDeals(savedDeals);
  }, []);

  const saveDeals = (updated) => {
    setDeals(updated);
    localStorage.setItem('deals', JSON.stringify(updated));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDeal = {
      id: Date.now(),
      title,
      description,
    };
    const updatedDeals = [...deals, newDeal];
    saveDeals(updatedDeals);
    setTitle('');
    setDescription('');
  };

  const handleDelete = (id) => {
    const updated = deals.filter((deal) => deal.id !== id);
    saveDeals(updated);
  };

  return (
    <div className="admin-form">
      <h2>Admin Panel: Post New Deal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Deal title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Deal description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Post Deal</button>
      </form>

      <h3>Existing Deals</h3>
      <ul>
        {deals.map((deal) => (
          <li key={deal.id}>
            <strong>{deal.title}</strong>: {deal.description}
            <button onClick={() => handleDelete(deal.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
