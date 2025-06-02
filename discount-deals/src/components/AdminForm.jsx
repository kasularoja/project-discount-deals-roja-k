import  './AdminForm.css'
import { useState, useEffect} from 'react';
function AdminForm({ onAddDeal, onEdit, dealToEdit }) {
    const [form, setForm] = useState({
        title: '',
        description: '',
        discount: '',
        category: '',
        expiry: ''
    });

    useEffect (() => {
        if (dealToEdit) {
            setForm(dealToEdit);
        } else {
        setForm({
            title: '',
            description: '',
            discount: '',
            category: '',
             expiry: ''
        });
    }
}, [dealToEdit]);
const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({...prev, [name]: value}));
};

const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDeal = {
        ...form,
        discount: parseInt(form.discount),
    };
    if (dealToEdit) {
        onEdit(formattedDeal);
    } else {
        onAddDeal(formattedDeal);
    }
    setForm({
        title: '',
        description: '',
        discount: '',
        category: '',
        expiry: ''
    });
};

return (
        <form className="admin-form" onSubmit={handleSubmit}>
            <h2>{dealToEdit ? 'Edit Deal' : 'Post a New Deal'}</h2>
        
                <label>
                   Title:
                   <input type="text" 
                   name="title"
                   value={form.title} 
                   onChange={handleChange} 
                   required
                    />

                   </label>
                   <label>
                    Description:
                    <textarea
                    name="description"
                     value={form.description} 
                     onChange={handleChange}
                     required
                      />
                   </label>
                   <label>
                    Discount (%):
                    <input
                    type="number"
                    name="discount"
                    value={form.discount}
                    onChange={handleChange}
                    required
                    />
                    </label>
                   <label>
                    Category:
                    <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                    >
                         <option value="">-- Select Category --</option>
                        <option value="Food">Food</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Electronics">Electronics</option>
                        </select>
                        </label>
                        <label>
                            Expiry Date:
                            <input type="date" 
                            name="expiry"
                            value={form.expiry}
                            onChange={handleChange}
                            required
                            />
                        
                        </label>
                        <button type="submit">
                            {dealToEdit ? 'Update Deal' : 'Add Deal'}
                            </button>
                        </form>

    );
}
    

export default AdminForm;
                 
                