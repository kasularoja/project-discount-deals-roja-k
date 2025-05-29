import DealCard from './DealCard';
import './DealList.css';
function DealList ({ deals })  {
    return (
        <div className="list">
            {deals.map(deal=> (
              <DealCard key={deal.id} deal={deal} />
              
            ))}
        </div>
    );
    }

    export default DealList;