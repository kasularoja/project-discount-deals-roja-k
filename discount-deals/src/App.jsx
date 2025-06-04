import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import DealList from './components/DealList';
import FilterBar from './components/FilterBar';
import AdminForm from './components/AdminForm';
import SearchSortBar from './components/SearchSortBar';
import Login from './components/Login';
import Favorites from './components/Favorites';
import './App.css';

function App() {
  const [deals, setDeals] = useState([
    { id: 1, title: "Pizza 50% Off", description: "Get half off all large pizzas.", discount: 50, category: "Food", expiry: "2025-06-10" },
    { id: 2, title: "Tops Sale", description: "Winter sale on all tops.", discount: 30, category: "Fashion", expiry: "2025-06-15" },
    { id: 3, title: "Laptop", description: "Back to school sale.", discount: 20, category: "Electronics", expiry: "2025-06-12" },
  ]);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [dealToEdit, setDealToEdit] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  });
  const [role, setRole] = useState('guest');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFilterChange = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories(prev => [...prev, category]);
    } else {
      setSelectedCategories(prev => prev.filter(cat => cat !== category));
    }
  };

  const addNewDeal = (newDeal) => {
    setDeals(prevDeals => [...prevDeals, { ...newDeal, id: prevDeals.length + 1 }]);
  };

  const editDeal = (updatedDeal) => {
    setDeals(prevDeals => prevDeals.map(deal => deal.id === updatedDeal.id ? updatedDeal : deal));
    setDealToEdit(null);
  };

  const deleteDeal = (id) => {
    setDeals(prevDeals => prevDeals.filter(deal => deal.id !== id));
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]);
  };

  const compareDeals = (a, b) => {
    if (sortOption === 'discount') return b.discount - a.discount;
    if (sortOption === 'expiry') return new Date(a.expiry) - new Date(b.expiry);
    return a.title.localeCompare(b.title);
  };

  const filteredDeals = deals
    .filter(deal => selectedCategories.length === 0 || selectedCategories.includes(deal.category))
    .filter(deal => deal.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort(compareDeals);

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
    navigate('/home');
  };

  return (
    <div className="app">
      <Header />
      
      {/* Navigation Buttons */}
      <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/favorites')}>
          Favorites ({favorites.length})
        </button>
      </div>

      <Routes>
        {/* Login route */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />

        {/* Main Deals Page */}
        <Route
          path="/home"
          element={
            <main className="mainContent">
              {role === 'admin' && (
                <AdminForm onAddDeal={addNewDeal} onEditDeal={editDeal} dealToEdit={dealToEdit} />
              )}
              <SearchSortBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                sortOption={sortOption}
                onSortChange={setSortOption}
              />
              <FilterBar selectedCategories={selectedCategories} onFilterChange={handleFilterChange} />
              <DealList
                deals={filteredDeals}
                onEdit={role === 'admin' ? setDealToEdit : null}
                onDelete={role === 'admin' ? deleteDeal : null}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            </main>
          }
        />

        {/* Favorites Page */}
        <Route
          path="/favorites"
          element={
            <Favorites
              deals={deals}
              favorites={favorites}
              onFavorite={toggleFavorite}
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;