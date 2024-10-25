import "./style/header.css";
export default function Header({shoppingCart}) {
  return (
    <header>
      <div className="header-first-part">
        <div id="logo">start boostrap</div>
        <ul id="links">
          <li>Home</li>
          <li>About</li>
          <li>shop</li>
        </ul>
      </div>
      <div className="header-second-part">
        <button>
          <span>😁</span>
          Card
          <span>{shoppingCart.length}</span>
        </button>
      </div>
    </header>
  );
}