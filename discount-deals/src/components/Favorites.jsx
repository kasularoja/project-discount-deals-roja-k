import { useEffect, useState } from 'react';
import DealCard from './DealCard';
import './Favorites.css';

function Favorites({ deals, favorites, onFavorite }) {
  const [filteredDeals, setFilteredDeals] = useState([]);

  useEffect(() => {
    // Filter deals to only show favorited ones
    const favDeals = deals.filter(deal => favorites.includes(deal.id));
    setFilteredDeals(favDeals);
  }, [deals, favorites]);

  return (
    <div className="favorites-page">
      <h2>Your Favorite Deals</h2>
      
      {filteredDeals.length > 0 ? (
        <div className="favorites-grid">
          {filteredDeals.map(deal => (
            <DealCard
              key={deal.id}
              deal={deal}
              isFavorite={true}
              onFavorite={onFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>You haven't saved any favorites yet!</p>
          <p>Browse deals and click the ♥ icon to save them here.</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;