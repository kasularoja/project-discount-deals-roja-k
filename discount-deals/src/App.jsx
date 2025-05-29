import { useState } from 'react';
import Header from './components/Header';
import Footer  from './components/Footer';

import DealList from './components/DealList';
import FilterBar from './components/FilterBar';
import AdminForm from './components/AdminForm';

import './App.css';

function App() { 
 
  const [deals, setDeals] = useState([
    {
      id: 1, 
      title: "Pizza 50% Off", 
      description: "Get half off all large pizzas.",
      discount: 50, 
      category: "Food", 
      expiry: "2025-06-10",
    },
    {
      id: 2,
       title: "Tops Sale",
       description:"Winter sale on all tops.",
        discount: 30, 
        category: "Fashion", 
        expiry: "2025-06-15",
      },
    {
      id: 3,
       title: "laptop", 
       description: "Back to school sale.",
       discount: 20, 
       category: "Electronics", 
       expiry: "2025-06-12"
      },

  ]);
  const [selectedCategories, setSelectedCategories] = useState([]);
 


  const handleFilterChange = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories(prev => [...prev, category]); 
     
     } else{
      setSelectedCategories(prev => prev.filter(category => category!==category));
      
    }
  };
      
  const addNewDeal = (newDeal) => {
    setDeals(prevDeals => [
      ...prevDeals,
       {...newDeal, id: prevDeals.length + 1 },
    ]);
  };
  const filteredDeals = 
    selectedCategories.length === 0 
    ? deals
    : deals. filter(deal => selectedCategories.includes(deal.category));
    
   return (
    <div className="app">
    <Header />
    <main className="mainContent" >
    
      
      <AdminForm onAddDeal={addNewDeal} />
      <FilterBar
      selectedCategories={selectedCategories}
      onFilterChange={handleFilterChange}
    />
        <DealList deals={filteredDeals} />
        </main>
        <Footer />
        </div>
        );
      
     
  }
export default App;
