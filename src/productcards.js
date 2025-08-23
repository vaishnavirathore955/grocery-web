import "./ProductPage.css"; 
import atta from "./images/atta.jpg";
import baby from "./images/baby.jpg";
import bath from "./images/bath.jpg";
import beauty from "./images/beauty.jpg";
import biscuits from "./images/biscuits.jpg";
import cereals from "./images/cereals.jpg";
import chicken from "./images/chicken.jpg";
import chips from "./images/chips.jpg";
import cleaning from "./images/cleaning.jpg";
import cooker from "./images/cooker.jpg";
import cookware from "./images/cookware.jpg";
import dairy from "./images/dairy.jpg";
import drinks from "./images/drinks.jpg";
import dryfruits from "./images/dryfruits.jpg";
import electronics from "./images/electronics.jpg";
import feminine from "./images/feminine.jpg";
import freshners from "./images/freshners.jpg";
import fruits from "./images/fruits.jpg";
import hair from "./images/hair.jpg";
import health from "./images/health.jpg";
import home from "./images/home.jpg";
import Homeimprovement from "./images/Homeimprovement.jpg";
import jams from "./images/jams.jpg";
import kitchen from "./images/kitchen.jpg";
import masala from "./images/masala.jpg";
import oil from "./images/oil.jpg";
import oral from "./images/oral.jpg";
import organic from "./images/organic.jpg";
import pasta from "./images/pasta.jpg";
import sexual from "./images/sexual.jpg";
import sports from "./images/sports.jpg";
import sweets from "./images/sweets.jpg";
import tea from "./images/tea.jpg";
import travel from "./images/travel.jpg";

const categories = [
    {
        title: "Grocery & Kitchen",
        items: [
            { name: "Fruits & Vegetables", img: fruits },
            { name: "Atta, Rice & Dal", img: atta },
            { name: "Organic Food", img: organic },
            { name: "Dairy, Bread & Eggs", img: dairy },
            { name: "Cooking Oil", img: oil },
            { name: "Dry Fruits", img: dryfruits },
            { name: "Chicken, Fish & Meat", img: chicken },
            { name: "Masala & Spices", img: masala },
        ],
    },
    {
    title: "Snacks & Drinks",
    items: [
      { name: "Chips & Namkeens", img: chips },
      { name: "Sweets & Chocolates", img: sweets },
      { name: "Drinks & Juices", img: drinks },
      { name: "Tea & Coffee", img: tea },
      { name: "Jams & Spreads", img: jams },
      { name: "Pasta & Noodles", img: pasta },
      { name: "Breakfast Cereals", img: cereals },
      { name: "Biscuits & Cookies", img: biscuits },
    ],
  },
  {
    title: "Beauty & Personal Care",
    items: [
      { name: "Bath & Body", img: bath },
      { name: "Hair Care", img: hair },
      { name: "Oral Care", img: oral },
      { name: "Beauty & Cosmetics", img: beauty },
      { name: "Feminine Needs", img: feminine },
      { name: "Baby Care", img: baby },
      { name: "Health & Pharma", img: health },
      { name: "Sexual Wellness", img: sexual },
    ],
  },
  {
    title: "Household Essentials",
    items: [
      { name: "Electronics", img: electronics },
      { name: "cookware", img: cookware },
      { name: "Cleaning needs", img: cleaning },
      { name: "Freshners & Repellents", img: freshners },
      { name: "Cooker & Utensils", img: cooker },
      { name: "Home Decor", img: home },
      { name: "Kitchen Storage", img: kitchen },
      { name: "Sports & Toy Corner", img: sports },
      { name: "Home Improvement", img: Homeimprovement },
      { name: "Travel & Luggage", img: travel },
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
                <img src={item.img} alt={item.name} />
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
