import './footer.css';
import first from './Image/We8 Grocery Stor Logo.jpg' ;
function Footer(){
    return(
        <>
	

	<footer id="footer">
	<div class="footer">	
		<div>
            <li class="bold">Grocery <i class="fa-solid fa-chevron-right"></i></li>
			<li>Ghee & Vanaspati</li>
			<li>Organic Food</li>
			<li>Flours</li>
			<li>Rice & Rice Products</li>
			<li>Pulses</li>
			<li>DAL</li>
            <li>Masala & Spices</li>
            <li>Salt / Sugar / Jaggery</li>
            <li>Cooking Oil</li>
            <li>Dry Fruits</li>
		</div>
		<div>
            <li class="bold">Fruits & Vegetables <i class="fa-solid fa-chevron-right"></i></li>
			<li>Seasonal Fruits</li>
			<li>Fresh Vegetables</li>
			<li>Fresh Fruits</li>
			<li>Plant and Accessories</li>
			
		</div>
        <div>
            <li class="bold">Fish & Meat <i class="fa-solid fa-chevron-right"></i> </li>
			<li>Delicatessen</li>
			<li>Meat</li>
			<li>Fish & Sea Food</li>
			<li>Chicken Whole & Cuts</li>
			
		</div>
		<div>
            <li class="bold">Packaged Food <i class="fa-solid fa-chevron-right"></i></li>
			<li>Breakfast Cereals</li>
			<li>Bakery</li>
			<li>Jams & Spreads</li>
            <li>Snacks & Farsans</li>
            <li>Pasta & Noodles</li>
            <li>Pickles</li>
            <li>Ketchup & Sauces</li>
            <li>Instant Food</li>
            <li>Gourmet & World Food</li>
            <li>Health Food</li>
            <li>Frozen Food</li>
            <li>Biscuits & Cookies</li>
            <li>Sweets</li>
            <li>Chocolates & Candies</li>
		</div>
		<div>
            <li class="bold">Dairy & Beverages <i class="fa-solid fa-chevron-right"></i></li>
			<li>Dairy</li>
			<li>Beverages</li>
			<li>Poultry</li>

		</div>
        <div>
            <li class="bold">Home & Kitchen <i class="fa-solid fa-chevron-right"></i></li>
            <li>Disposable</li>
            <li>Utensils Cleaner</li>
            <li>Detergent & Fabric Care</li>
            <li>Cleaners</li>
            <li>Freshners & Repellents</li>
            <li>Tissue Paper & Napkins</li>
            <li>Pooja Needs</li>
            <li>Shoe Care</li>
            <li>Home Improvement</li>
            <li>KITCHEN COOKWARE & SERVEWARE</li>
            <li>Kitchen & Dining</li>
            <li>Kitchen Essentials</li>
            <li>Kitchen Appliances</li>
            <li>Home Appliance</li>
            <li>Personal Care Appliances</li>
            <li>Kitchen Storage</li>
            <li>Furniture & Décor</li>
            <li>Home Furnishing</li>
            <li>Bathroom ware</li>
            <li>Bed & Bath</li>
            
        </div>
		</div>

        <div>
    </div>

        <div class="footer1">
        <div>
            <div className="img">
                <img src={first} alt="first"></img>
                <div>
                    <li>we 8 brings its customers low prices every day. We offer a <br></br>wide choice covering fresh & packaged food, grains, pulses,<br></br> dairy, frozen, plastics, utensils, crockery, travel, stationery, & <br></br>more. SPAR has 13,900 stores in 48 countries. In India, SPAR<br></br> has 23 stores across 8 cities.</li>
                </div>
                <div>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>


        <div>
        <div className='footer-side'>
            <div>
                <ul>
                    <li>Your Accounts</li><br></br>
                    <li>FAQ</li><br></br>
                    <li>Store list</li><br></br>
                </ul>    
            </div>

            <div>
                <ul>
                    <li>Share feedback</li><br></br>
                    <li>Help & support</li><br></br>
                    <li>Call us</li><br></br>
                </ul>    
            </div>

            <div>
                <ul>
                    <li>About us</li><br></br>
                    <li>Term</li><br></br>
                    <li>Privacy policy</li><br></br>
                    <li>Return & Refund policy</li><br></br>
                </ul>    
            </div>
        </div>

        <div className='copy-right'>
            <p>Copyright © TEHZEEB JAHAN 2024. All rights reserved.</p>
        </div>

        </div>

        </div>
        
	</footer>
        </>
    );
}

export default Footer;