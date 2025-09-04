import React, { useState } from 'react';
import './order.css';

const Orderpage = () => {
  // State to track form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    quantity: 1,
    address: '',
  });

  // Handler to update form data in state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Submitted:', formData);
    // You can add further logic here like sending the form data to a server
  };

  return (
    <>
    <div className="order-form" >
      <h1>Order Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div >
          <label htmlFor="name" className='name'> Name :</label>
          <input 
            type="text"
            className="name1"
            name="name"
            placeholder='first'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input 
            type="text"
            className="name1"
            name="name1"
            placeholder='last'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div id='Email'>
          <label htmlFor="email" id='email1'>Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div >
          <label htmlFor="phone" id='address1'>phone :</label>
          <input
            type="address"
            id="address"
            name="address"
            placeholder='phone1'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="address"
            id="address"
            name="address"
            placeholder='phone2'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div >
          <label htmlFor="address" id='address1'>Address :</label>
          <input
            type="address"
            id="address"
            name="address"
            placeholder='Address1'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="address"
            id="address"
            name="address"
            placeholder='Address2'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <input
            type=""
            id="add"
            name=""
            placeholder='city'
            value={formData.email}
            onChange={handleChange}
            required
          />

        <select
            id="add"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">country</option>
            <option value="Product1">Product 1</option>
            <option value="Product2">Product 2</option>
            <option value="Product3">Product 3</option>
          </select>
          <input
            type=""
            id="add"
            name=""
            placeholder='city code'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Product Selection */}
        <div>
          <label htmlFor="product" id='product'>Product :</label>
          <select
            id="product1"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">Select a product</option>
            <option value="Product1">Product 1</option>
            <option value="Product2">Product 2</option>
            <option value="Product3">Product 3</option>
          </select>
          <label htmlFor="quantity" id='quantity'>Quantity :</label>
          <input
            type="number"
            id="quantity1"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
          />

<label id='radio'>Delivery today :</label>
<label >
        <input
          type="radio"
          name="option"
          id='radio1'
          value="option1"
          onChange={handleChange}
        />
        Yes
      </label>

      <label>
        <input
          type="radio"
          name="option"
          value="option2"
          id='radio1'
          onChange={handleChange}
        />
        No
      </label>

      
      

      
        </div>
        <div id='instruction'>
          <label htmlFor="instruction" id='instruction'>Additional instruction :</label>
          <input
            type="instruction"
            id="instruction1"
            name="instruction"
            placeholder='( optional )'
            value={formData.email}
            onChange={handleChange}
            optional
          />
          </div>

        {/* Submit Button */}
        <label id='payy' style={{marginTop:"30px"}}>Payment section :</label>
        <label >
        <input
          type="radio"
          name="option"
          id='radio1'
          value="option1"
          onChange={handleChange}
        />
        Cash
      </label>

      <label>
        <input
          type="radio"
          name="option"
          value="option2"
          id='radio1'
          onChange={handleChange}
        />
        online
      </label>

      
        <div id='payment' class='ps-5'>
          <br/>
          <label className='mt-2'>Delivery fees :</label>
          &emsp;&emsp;<label>$10.00</label><br/><br/>
          <label>subtotal :</label>
          &emsp;&emsp;&emsp;&emsp;&nbsp;<label>$10.00</label>
        </div>
        <div class='bg'>
          <hr class='hr'></hr>
        </div>
        <div id='amount' class='ps-5'>
          <label>Amount Due :</label>
          &emsp;&emsp;<label>$10.00</label>
        </div>

       
        <div id='btn'>
          <button type="submit"  id='submiit1'> Order cancel</button>
          <button type="submit" id='submit'> Order Now</button>
        </div>
       
      </form>
    </div>

    </>
  );
};

export default Orderpage;
