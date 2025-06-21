import React, { useState, useEffect } from 'react';
import './Favorites.css';

export default function Favorites() {
  // Load favorites from localStorage or default to empty array
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Remove deal from favorites by id
  const removeFavorite = (id) => {
    setFavorites(favorites.filter(deal => deal.id !== id));
  };

  if (favorites.length === 0) {
    return (
      <div className="favorites-container">
        <h1>Your Favorite Deals</h1>
        <p>You have no favorite deals saved yet.</p>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <h1>Your Favorite Deals</h1>
      <ul className="favorites-list">
        {favorites.map(deal => (
          <li key={deal.id} className="favorite-item">
            <h3>{deal.title}</h3>
            <p>{deal.description}</p>
            <button onClick={() => removeFavorite(deal.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
