import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours;
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  // if (hour >= openHours && hour <= closeHours) {
  //   alert("We are currently open");
  // } else {
  //   alert("We are currently closed");
  // }
  return isOpen ? (
    <h3>{new Date().toDateString()}Woo! We are open now.</h3>
  ) : (
    <h3>{new Date().toDateString()} Sorry! We are Closed now.</h3>
  );
}

function Pizza() {
  return (
    <div>
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
      <img src="pizzas/focaccia.jpg" alt=" " />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
