import React, { useState } from 'react';
import './order.css';

const Orderpage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone1: '',
    phone2: '',
    address1: '',
    address2: '',
    city: '',
    country: '',
    cityCode: '',
    product: '',
    quantity: 1,
    deliveryToday: '',
    instruction: '',
    payment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Submitted:', formData);
  };

  return (
    <div className="order-form">
      <h1>Order Form</h1>
      <form onSubmit={handleSubmit}>
        
        {/* Name */}
        <label>Name :</label>
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Phone */}
        <label>Phone :</label>
        <div className="form-row">
          <input
            type="text"
            name="phone1"
            placeholder="Phone 1"
            value={formData.phone1}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone2"
            placeholder="Phone 2"
            value={formData.phone2}
            onChange={handleChange}
          />
        </div>

        {/* Address */}
        <label>Address :</label>
        <div className="form-row">
          <input
            type="text"
            name="address1"
            placeholder="Address 1"
            value={formData.address1}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address2"
            placeholder="Address 2"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">Country</option>
            <option value="IN">India</option>
            <option value="US">USA</option>
          </select>
          <input
            type="text"
            name="cityCode"
            placeholder="City Code"
            value={formData.cityCode}
            onChange={handleChange}
          />
        </div>

        {/* Product */}
        <label>Product :</label>
        <div className="form-row">
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="p1">Product 1</option>
            <option value="p2">Product 2</option>
          </select>
          <input
            type="number"
            name="quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        {/* Delivery Today */}
        <label>Delivery today :</label>
        <div className="radio-group">
          <label><input type="radio" name="deliveryToday" value="yes" onChange={handleChange} /> Yes</label>
          <label><input type="radio" name="deliveryToday" value="no" onChange={handleChange} /> No</label>
        </div>

        {/* Instruction */}
        <label>Additional Instruction :</label>
        <textarea
          name="instruction"
          placeholder="(optional)"
          value={formData.instruction}
          onChange={handleChange}
        />

        {/* Payment Section */}
        <label>Payment method :</label>
        <div className="radio-group">
          <label><input type="radio" name="payment" value="cash" onChange={handleChange} /> Cash</label>
          <label><input type="radio" name="payment" value="online" onChange={handleChange} /> Online</label>
        </div>

        <div className="summary">
          <div className="summary-row"><span>Delivery fees:</span><span>$10.00</span></div>
          <div className="summary-row"><span>Subtotal:</span><span>$10.00</span></div>
        </div>
        <div className="summary total">
          <div className="summary-row"><strong>Amount Due:</strong><strong>$20.00</strong></div>
        </div>

        {/* Buttons */}
        <div id="btn">
          <button type="button" id="submiit1">Cancel</button>
          <button type="submit" id="submit">Order Now</button>
        </div>
      </form>
    </div>
  );
};

export default Orderpage;
