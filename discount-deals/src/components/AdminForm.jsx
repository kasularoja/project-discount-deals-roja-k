import  './AdminForm.css'
import { useState } from 'react';
function AdminForm({ onAddDeal }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [discount, setDiscount] = useState('');
    const [category, setCategory] = useState('');
    const [expiry, setExpiry] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title || !description || !discount || !category || !expiry) {
            alert('Please fill in all fields before submitting.');
            return;
        }
        const newDeal = {
            title,
            description,
            discount: parseInt(discount),
            category,
            expiry,
        };
        onAddDeal(newDeal);
        setTitle('');
        setDescription('');
        setDiscount('');
        setCategory('');
        setExpiry('');
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Post a New Deal</h2>
        
                <label>
                   Title:
                   <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />

                   </label>
                   <label>
                    Description:
                    <textarea value={description} onChange={(event) => setTitle(event.target.value)} />
                   </label>
                   <label>
                   
    
                    Discount (%):
                    <input type="number" value={discount} onChange={(event) => setDiscount(event.target.value)} />
                    </label>
                    <label>
                        Category:
                        <select value={category} onChange={(event) => setCategory(event.target.value)}>
                        <option value="">-- Select Category --</option>
                        <option value="Food">Food</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Electronics">Electronics</option>
                        </select>
                        </label>
                        <label>
                            Expiry Date:
                            <input type="date" value={expiry} onChange={(event) => setExpiry(event.target.value)} />
                        </label>
                        <button type="submit">Add Deal</button>
                        </form>
    );
}
    

export default AdminForm;
                 
                