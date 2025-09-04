import React from "react";
import "./navbar.css"; // You can style this component as needed
import { Outlet } from "react-router-dom";
import logo from "./Image/We8 Grocery Stor Logo.jpg";
import g from "./Image/g.webp";
import f from "./Image/f.webp";
import m from "./Image/m.webp";
import p from "./Image/p.webp";
import d from "./Image/d.webp";
import h from "./Image/h.webp";

const Navbar1 = () => {
  return (
    <>
    <nav className="navbar navbar1 mt-2 sticky-top">
      <ul className="navbar-list">
        <li className="logo-item">
          <img src={logo} className="logo" alt="logo" />
        </li>
        <div>
        <li className="location-info">
          <p className="pera">Pick up<i class="fa-solid fa-angle-down"></i></p>
          <p>Enable Location to get nearest stores</p>
        </li>
        </div>
        <div className="megha">
        <li><a href="/" className="nav-link"><i class="fa-solid fa-magnifying-glass"></i>Search</a></li>
        <li><a href="/about" className="nav-link"><i class="fa-solid fa-dice-four"></i>Categories</a></li>
        <li><a href="/services" className="nav-link"><i class="fa-solid fa-percent"></i>Deals</a></li>
        <li><a href="/contact" className="nav-link"><i class="fa-solid fa-cart-shopping"></i>Carts</a></li>
        <li><a href="/login" className="nav-link"><i class="fa-solid fa-user"></i>Login</a></li>
        </div>
      </ul>
    </nav>

    <nav className="navbar navbar2 shadow sticky-top">
      <div className="mx-auto">
      <ul>
        <li><a href="/"><img src={g} alt="my profile"/>Grocery</a></li>
        <li><a href="/profile"><img src={f} alt="my profile"/>Fruits & Vegetable</a></li>
        <li><a href="/logout"><img src={m} alt="my profile"/>Fish & Meat</a></li>
        <li><a href="/"><img src={p} alt="my profile"/>Packaged Food</a></li>
        <li><a href="/profile"><img src={d} alt="my profile"/>Dairy & Beverages</a></li>
        <li><a href="/settings"><img src={h} alt="my profile"/>Home & Kitchan</a></li>
      </ul>
     </div> 
    </nav>
    <Outlet />
  </>
  );
};

export default Navbar1;
