import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Landing from "./components/Landing";
const products = [
  {
    id: 1,
    titel: "Fancy product",
    cur_price: 80.0,
    old_price: null,
    sale:false
  },
  {
    id: 2,
    titel: "Special Item",
    cur_price: 18.0,
    old_price: 20.0,
    sale:false
  },
  {
    id: 3,
    titel: "Sale Item",
    cur_price: 25.0,
    old_price: 50.0,
    sale:false
  },
  {
    id: 4,
    titel: "Popular Item",
    cur_price: 40.0,
    old_price: null,
    sale:false
  },
];
function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  console.log(shoppingCart.length);
  /**
   *
   * @param {object} newItem
   */
  const addToShoppingCart = (newItem) => {
    setShoppingCart([...shoppingCart, newItem]);
  };
  return (
    <div className="App">
      <Header shoppingCart={shoppingCart} />
      <Landing />
      <Cards products={products} onAdd={addToShoppingCart} />
    </div>
  );
}

export default App;
