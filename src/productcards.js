import React from "react";
import "./ProductPage.css"; // Optional: Add styles in a separate file
import first from './Image/We8 Grocery Stor Logo.jpg' ;

const categories = [
  {
    title: "Grocery & Kitchen",
    items: [
      { name: "Fruits & Vegetables", img: "fruits.jpg" },
      { name: "Atta, Rice & Dal", img: "atta.jpg" },
      { name: "Organic Food", img: "organic.jpg" },
      { name: "Dairy, Bread & Eggs", img: "dairy.jpg" },
      { name: "Cooking Oil", img: "oil.jpg" },
      { name: "Dry Fruits", img: "dryfruits.jpg" },
      { name: "Chicken, Fish & Meat", img: "chicken.jpg" },
      { name: "Masala & Spices", img: "masala.jpg" },
    ],
  },
  {
    title: "Snacks & Drinks",
    items: [
      { name: "Chips & Namkeens", img: "chips.jpg" },
      { name: "Sweets & Chocolates", img: "sweets.jpg" },
      { name: "Drinks & Juices", img: "drinks.jpg" },
      { name: "Tea & Coffee", img: "tea.jpg" },
      { name: "Jams & Spreads", img: "jams.jpg" },
      { name: "Pasta & Noodles", img: "pasta.jpg" },
      { name: "Breakfast Cereals", img: "cereals.jpg" },
      { name: "Biscuits & Cookies", img: "biscuits.jpg" },
    ],
  },
  {
    title: "Beauty & Personal Care",
    items: [
      { name: "Bath & Body", img: "bath.jpg" },
      { name: "Hair Care", img: "hair.jpg" },
      { name: "Oral Care", img: "oral.jpg" },
      { name: "Beauty & Cosmetics", img: "beauty.jpg" },
      { name: "Feminine Needs", img: "feminine.jpg" },
      { name: "Baby Care", img: "baby.jpg" },
      { name: "Health & Pharma", img: "health.jpg" },
      { name: "Sexual Wellness", img: "sexual.jpg" },
    ],
  },
  {
    title: "Household Essentials",
    items: [
      { name: "Electronics", img: "electronics.jpg" },
      { name: "cookware", img: "cookware.jpg" },
      { name: "Cleaning needs", img: "cleaning.jpg" },
      { name: "Freshners & Repellents", img: "freshners.jpg" },
      { name: "Cooker & Utensils", img: "cooker.jpg" },
      { name: "Home Decor", img: "home.jpg" },
      { name: "Kitchen Storage", img: "kitchen.jpg" },
      { name: "Sports & Toy Corner", img: "sports.jpg" },
      { name: "Home Improvement", img: "Homeimprovement.jpg" },
      { name: "Travel & Luggage", img: "travel.jpg" },
    ],
  },
];

const ProductPage = () => {
  return (
  <>
    <div className="product-page">
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <div className="category-header">
            <h2>{category.title}</h2>
            <a href="/see-all">See all</a>
          </div>
          <div className="category-grid">
            {category.items.map((item, idx) => (
              <div key={idx} className="category-item">
                <img src={`/images/${item.img}`} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default ProductPage;
