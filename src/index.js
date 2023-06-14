import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 21,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 20,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// pizzaData.map((pizza) => (pizza.price = pizza.price || "sold")); // pizza.price = pizza.price>0?pizza.price:"sold"  (By ternary operator)

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "tomato", fontSize: "48", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  if (pizzaData.length > 0) {
    return (
      <main className="menu">
        <p>
          Authentic Italian cousine. {pizzaData.length} creative dishes to
          choose from. All from our stone oven, all organic all delecious
        </p>
        <h2>Our Menu</h2>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </main>
    );
  } else {
    return (
      <p>We are still working on our menu, Sorry for the disappointment</p>
    );
  }
}
function Pizza({ pizzaObj }) {
  //? props replaced by {pizzaObj} : simple object distruction
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );

  // return pizzaObj.soldOut ? (
  //   <li className="pizza">
  //     <img src={pizzaObj.photoName} alt={pizzaObj.name} />
  //     <div>
  //       <h3>{pizzaObj.name}</h3>
  //       <p>{pizzaObj.ingredients}</p>
  //       <span>{pizzaObj.price}</span>
  //     </div>
  //   </li>
  // ):(
  //   null
  // );
}

function Footer() {
  const hour = new Date().getHours;
  const openHours = 10;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  const message = isOpen ? (
    <p>Happy to see you visiting here. But, Sorry! We are close now.</p>
  ) : (
    <p>We are open now. You can come or order online</p>
  );
  return (
    <footer className="footer">
      <div className="order">
        <button className="btn">Order</button>
        {message}
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
