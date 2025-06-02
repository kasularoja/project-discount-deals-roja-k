import './FilterBar.css';

function FilterBar({ categories, selectedCategories, onFilterChange }) {
  const allCategories = ['All', ...new Set(categories)];

  return (
    <div className="filter-bar">
      <h3>Filter by Category:</h3>
      <div className="filter-options">
        {allCategories.map(category => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category) || (category === 'All' && selectedCategories.length === 0)}
              onChange={() => onFilterChange(category)}
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;