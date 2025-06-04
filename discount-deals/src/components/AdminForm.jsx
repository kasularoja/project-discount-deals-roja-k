import { useState, useEffect } from 'react';
import './AdminForm.css';

function AdminForm({ dealToEdit, onAddDeal, onEditDeal }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    discount: '',
    category: 'Food',
    expiry: '',
    image: ''
  });

  useEffect(() => {
    if (dealToEdit) {
      setFormData({
        title: dealToEdit.title,
        description: dealToEdit.description,
        discount: dealToEdit.discount,
        category: dealToEdit.category,
        expiry: dealToEdit.expiry.split('T')[0],
        
      });
    } else {
      setFormData({
        title: '',
        description: '',
        discount: '',
        category: 'Food',
        expiry: '',
        image: ''
      });
    }
  }, [dealToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dealData = {
      ...formData,
      discount: Number(formData.discount),
      expiry: new Date(formData.expiry).toISOString(),
      id: dealToEdit?.id || Date.now()
    };

    if (dealToEdit) {
      onEditDeal(dealData);
    } else {
      onAddDeal(dealData);
    }
  };

  return (
    <div className="admin-form">
      <h2>{dealToEdit ? 'Edit Deal' : 'Add New Deal'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Discount (%):</label>
            <input
              type="number"
              name="discount"
              min="1"
              max="100"
              value={formData.discount}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Category:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Food">Food</option>
              <option value="Fashion">Fashion</option>
              <option value="Electronics">Electronics</option>
              
            </select>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Expiry Date:</label>
            <input
              type="date"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              required
            />
          </div>
          
          
             
            
          
        </div>
        
        <button type="submit">
          {dealToEdit ? 'Update Deal' : 'Add Deal'}
        </button>
      </form>
    </div>
  );
}

export default AdminForm;