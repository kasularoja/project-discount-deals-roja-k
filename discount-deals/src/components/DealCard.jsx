import './DealCard.css';
function DealCard  ({ deal }) {
    return (
        <div className="card">
            <h3>{deal.title}</h3>
            <p><strong>Discount:</strong> {deal.discount}%</p>
            <p><strong>category:</strong> {deal.category}</p>
            <p><strong>Expires on:</strong> {deal.expiry}</p>
            
        </div>
    );
};
export default DealCard;