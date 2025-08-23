import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Footer from './footer';
import Orderpage from './order';
import ProductPage from './productcards';
import Prodinfo from './prodinfo';
import Navbar1 from './navbar';
import Center2 from './Topposter';
import Center from './centerposter';
import Center3 from './poster';
import Center4 from './lastposter';
import SliderContainer from './SliderContainer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Navbar1/>
  <Center2/>
  <SliderContainer/>
  <ProductPage/>
  <Center/>
  <Prodinfo/>
  <Center3/>
  <Orderpage/>
  <Center4/>
  <Footer/>
  </>
);

reportWebVitals();
