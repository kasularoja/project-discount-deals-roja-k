import { useState } from 'react';
import DealCard from './DealCard';
import SearchSortBar from './SearchSortBar';
import FilterBar from './FilterBar';
import './DealList.css';

function DealList({ deals, favorites, onFavorite, onEdit, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('title');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleFilterChange = (category) => {
    if (category === 'All') {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(prev =>
        prev.includes(category) 
          ? prev.filter(c => c !== category) 
          : [...prev, category]
      );
    }
  };

  const filteredDeals = deals
    .filter(deal => 
      selectedCategories.length === 0 || 
      selectedCategories.includes(deal.category)
    )
    .filter(deal => 
      deal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deal.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'discount') return b.discount - a.discount;
      if (sortOption === 'expiry') return new Date(a.expiry) - new Date(b.expiry);
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="deal-list-container">
      <SearchSortBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />
      
      <FilterBar
        categories={deals.map(deal => deal.category)}
        selectedCategories={selectedCategories}
        onFilterChange={handleFilterChange}
      />
      
      <div className="deal-grid">
        {filteredDeals.map(deal => (
          <DealCard
            key={deal.id}
            deal={deal}
            isFavorite={favorites.includes(deal.id)}
            onFavorite={onFavorite}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default DealList;