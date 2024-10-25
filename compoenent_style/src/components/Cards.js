import './style/card.css';
import Card from "./Card";
export default function Cards({ products, onAdd }) {
  console.log(products);
  return (
    <div className="container">
      <div className="cards">
        {products.map((prd) => {
          return <Card prd={prd} onAdd={onAdd}/>;
        })}
      </div>
    </div>
  );
}