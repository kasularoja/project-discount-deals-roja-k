import  './FilterBar.css';
function FilterBar  ({ selectedCategories, onFilterChange }) {
    const categories = ['Food', 'Fashion', 'Electronics'];
    return (
        <div className="filterBar">
            <h3>Filter by Category:</h3>
            {categories.map((category) => (
                <label key={category}>
                    <input 
                    type="checkbox" 
                    checked={selectedCategories.includes(category)}
                    onChange={e => onFilterChange(category, e.target.checked)}
                    />
                    {category}
                </label>
            ))}
                </div>
                );
            }
            

export default FilterBar;