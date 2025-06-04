import React from 'react';
import './DealCard.css';

function DealCard({ deal, isFavorite, onFavorite, onDelete }) {
  return (
    <div className={`deal-card ${isFavorite ? 'favorite' : ''}`}>
      <div className="deal-image">
        
        {onFavorite && (
          <button 
            className="favorite-btn"
            onClick={() => onFavorite(deal.id)}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        )}
        <button
        className="delete-button"
        onClick={() => onDelete(deal.id)}
        ></button>
      </div>
      <div className="deal-info">
        <h3>{deal.title}</h3>
        <p className="discount">{deal.discount}% OFF</p>
        <p className="expiry">Expires: {new Date(deal.expiry).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default DealCard;