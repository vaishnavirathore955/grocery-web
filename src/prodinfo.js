import React from 'react';
import './prodinfo.css';
import amul from "./images/amul.jpg";
import amulcheese from "./images/amulcheese.jpg";
import atta from "./images/atta.jpg";
import baby from "./images/baby.jpg";
import bath from "./images/bath.jpg";
import beauty from "./images/beauty.jpg";
import biscuits from "./images/biscuits.jpg";
import cereals from "./images/cereals.jpg";
import chicken from "./images/chicken.jpg";
import chickenmomo from "./images/chickenmomo.jpg";
import chips from "./images/chips.jpg";
import cleaning from "./images/cleaning.jpg";
import cooker from "./images/cooker.jpg";
import cookware from "./images/cookware.jpg";
import dairy from "./images/dairy.jpg";
import dragon from "./images/dragon.jpg";
import drinks from "./images/drinks.jpg";
import dryfruits from "./images/dryfruits.jpg";
import electronics from "./images/electronics.jpg";
import emperor from "./images/emperor.jpg";
import feminine from "./images/feminine.jpg";
import freshners from "./images/freshners.jpg";
import fruits from "./images/fruits.jpg";
import grapes from "./images/grapes.jpg";
import guava from "./images/guava.jpg";
import hair from "./images/hair.jpg";
import health from "./images/health.jpg";
import home from "./images/home.jpg";
import Homeimprovement from "./images/Homeimprovement.jpg";
import jams from "./images/jams.jpg";
import kitchen from "./images/kitchen.jpg";
import kiwi from "./images/kiwi.jpg";
import lemon from "./images/lemon.jpg";
import london from "./images/london.jpg";
import londondairy from "./images/londondairy.jpg";
import mackerel from "./images/mackerel.jpg";
import masala from "./images/masala.jpg";
import milky from "./images/milky.jpg";
import milkymist from "./images/milkymist.jpg";
import oil from "./images/oil.jpg";
import oral from "./images/oral.jpg";
import organic from "./images/organic.jpg";
import pasta from "./images/pasta.jpg";
import pear from "./images/pear.jpg";
import rupchanda from "./images/rupchanda.jpg";
import sexual from "./images/sexual.jpg";
import slider1 from "./images/slider-1.png";
import slider2 from "./images/slider-2.png";
import spar from "./images/spar.jpg";
import sports from "./images/sports.jpg";
import squid from "./images/squid.jpg";
import sweets from "./images/sweets.jpg";
import tea from "./images/tea.jpg";
import tilopia from "./images/tilopia.jpg";
import travel from "./images/travel.jpg";
import tuna from "./images/tuna.jpg";

const categories = [
  {
    title: "Fruit and Vegetable",
    items: [
      { name: "Lemon", price: "₹4", img: lemon, weight: "1 PCS" },
      { name: "Guava Prepack", price: "₹22.5", img: guava, weight: "300 GM" },
      { name: "Pear Beauty", price: "₹189.5", img: pear, weight: "500 GM" },
      { name: "Grapes Redglobe", price: "₹109", img: grapes, weight: "250 GM" },
      { name: "Dragon Fruit Each", price: "₹69", img: dragon, weight: "1 PCS" },
      { name: "SPAR Fresh Longan 250GM", price: "₹69", img: spar, weight: "1 PCS" },
      { name: "Zespri Kiwi Golden Pack Of 3", price: "₹69", img: kiwi, weight: "1 PCS" },
    ],
  },
  {
    title: "Fish and Meat",
    items: [
      { name: "Squid Long Whole", price: "₹137.25", img: squid, weight: "250 GM" },
      { name: "Tuna Fish Whole", price: "₹87.25", img: tuna, weight: "250 GM" },
      { name: "Mackerel Fish Whole", price: "₹67.25", img: mackerel, weight: "250 GM" },
      { name: "Tilapia Fish Whole", price: "₹39.75", img: emperor, weight: "250 GM" },
      { name: "Emperor Fish whole", price: "₹99.5", img: tilopia, weight: "500 GM" },
      { name: "Roopchand Fish Whole", price: "₹99.5", img: rupchanda, weight: "500 GM" },
      { name: "Momo chicken", price: "₹99.5", img: chickenmomo, weight: "500 GM" },
    ],
  },
  {
    title: "Dairy, Bread & Eggs",
    items: [
      { name: "NANDINI MYSORE PAK", price: "₹99", img: chickenmomo, weight: "100 GM" },
      { name: "Amul Butter", price: "₹49", img: amul, weight: "100 GM" },
      { name: "Milk Chocolate", price: "₹99", img: amulcheese, weight: "250 GM" },
      { name: "Milk Chocolate", price: "₹99", img: milky, weight: "250 GM" },
      { name: "Milk Chocolate", price: "₹99", img: milkymist, weight: "250 GM" },
      { name: "Milk Chocolate", price: "₹99", img: london, weight: "250 GM" },
      { name: "Milk Chocolate", price: "₹99", img: londondairy, weight: "250 GM" },
    ],
  },
];

function Prodinfo() {
  return (
    <div className="app">
      {/* <header>
        <h1>Online Grocery Store</h1>
      </header> */}
      <div className="categories">
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <div className="category-header">
            <h2>{category.title}</h2>
            <a href="/see-all">See all</a>
          </div>
            <div className="items">
              {category.items.map((item, idx) => (
                <div className="item" key={idx}>
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.weight}</p>
                  <p className="price">{item.price}</p>
                  <button>Add</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prodinfo;
