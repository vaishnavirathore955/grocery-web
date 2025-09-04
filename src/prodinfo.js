import React from 'react';
import './prodinfo.css';

const categories = [
  {
    title: "Fruit and Vegetable",
    items: [
      { name: "Lemon", price: "₹4", img: "lemon.jpg", weight: "1 PCS" },
      { name: "Guava Prepack", price: "₹22.5", img: "guava.jpg", weight: "300 GM" },
      { name: "Pear Beauty", price: "₹189.5", img: "pear.jpg", weight: "500 GM" },
      { name: "Grapes Redglobe", price: "₹109", img: "grapes.jpg", weight: "250 GM" },
      { name: "Dragon Fruit Each", price: "₹69", img: "dragon.jpg", weight: "1 PCS" },
      { name: "SPAR Fresh Longan 250GM", price: "₹69", img: "spar.jpg", weight: "1 PCS" },
      { name: "Zespri Kiwi Golden Pack Of 3", price: "₹69", img: "kiwi.jpg", weight: "1 PCS" },
    ],
  },
  {
    title: "Fish and Meat",
    items: [
      { name: "Squid Long Whole", price: "₹137.25", img: "squid.jpg", weight: "250 GM" },
      { name: "Tuna Fish Whole", price: "₹87.25", img: "tuna.jpg", weight: "250 GM" },
      { name: "Mackerel Fish Whole", price: "₹67.25", img: "mackerel.jpg", weight: "250 GM" },
      { name: "Tilapia Fish Whole", price: "₹39.75", img: "emperor.jpg", weight: "250 GM" },
      { name: "Emperor Fish whole", price: "₹99.5", img: "tilopia.jpg", weight: "500 GM" },
      { name: "Roopchand Fish Whole", price: "₹99.5", img: "rupchanda.jpg", weight: "500 GM" },
      { name: "Momo chicken", price: "₹99.5", img: "chickenmomo.jpg", weight: "500 GM" },
    ],
  },
  {
    title: "Dairy, Bread & Eggs",
    items: [
      { name: "NANDINI MYSORE PAK", price: "₹99", img: "chickenmomo.jpg", weight: "100 GM" },
      { name: "Amul Butter", price: "₹49", img: "amul.jpg", weight: "100 GM" },
      { name: "Milk Chocolate", price: "₹99", img: "amulcheese.jpg", weight: "250 GM" },
      { name: "Milk Chocolate", price: "₹99", img: "milky.jpg", weight: "250 GM" },
      { name: "Milk Chocolate", price: "₹99", img: "milkymist.jpg", weight: "250 GM" },
      { name: "Milk Chocolate", price: "₹99", img: "london.jpg", weight: "250 GM" },
      { name: "Milk Chocolate", price: "₹99", img: "londondairy.jpg", weight: "250 GM" },
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
                  <img src={`/images/${item.img}`} alt={item.name} />
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
