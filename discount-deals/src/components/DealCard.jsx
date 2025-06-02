import './DealCard.css';

function DealCard({ deal, isFavorite, onFavorite }) {
  return (
    <div className={`deal-card ${isFavorite ? 'favorite' : ''}`}>
      <div className="deal-image">
        <img src={deal.image || '/placeholder-deal.jpg'} alt={deal.title} />
        {onFavorite && (
          <button 
            className="favorite-btn"
            onClick={() => onFavorite(deal.id)}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        )}
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