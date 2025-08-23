import React, { useState } from "react";
import "./navbar.css"; 
import { Outlet } from "react-router-dom";
import logo from "./Image/We8 Grocery Stor Logo.jpg";
import g from "./Image/g.webp";
import f from "./Image/f.webp";
import m from "./Image/m.webp";
import p from "./Image/p.webp";
import d from "./Image/d.webp";
import h from "./Image/h.webp";

const Navbar1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar1 mt-2 sticky-top">
        <div className="navbar-left">
          <img src={logo} className="logo" alt="logo" />
          <div className="location-info">
            <p className="pera">
              Pick up<i className="fa-solid fa-angle-down"></i>
            </p>
            <p>Enable Location to get nearest stores</p>
          </div>
        </div>

        {/* Hamburger Button with cross toggle */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Nav Links */}
        <ul className={`megha ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="/" className="nav-link">
              <i className="fa-solid fa-magnifying-glass"></i> Search
            </a>
          </li>
          <li>
            <a href="/about" className="nav-link">
              <i className="fa-solid fa-dice-four"></i> Categories
            </a>
          </li>
          <li>
            <a href="/services" className="nav-link">
              <i className="fa-solid fa-percent"></i> Deals
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-link">
              <i className="fa-solid fa-cart-shopping"></i> Carts
            </a>
          </li>
          <li>
            <a href="/login" className="nav-link">
              <i className="fa-solid fa-user"></i> Login
            </a>
          </li>
        </ul>
      </nav>

      {/* Navbar 2 */}
      <nav className="navbar navbar2">
        <div className="mx-auto">
          <ul>
            <li><a href="/"><img src={g} alt=""/> Grocery</a></li>
            <li><a href="/profile"><img src={f} alt=""/> Fruits & Vegetable</a></li>
            <li><a href="/logout"><img src={m} alt=""/> Fish & Meat</a></li>
            <li><a href="/"><img src={p} alt=""/> Packaged Food</a></li>
            <li><a href="/profile"><img src={d} alt=""/> Dairy & Beverages</a></li>
            <li><a href="/settings"><img src={h} alt=""/> Home & Kitchen</a></li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar1;
