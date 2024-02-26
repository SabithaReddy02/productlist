import React from 'react';
import "./App.css";
import ProductList from './components/ProductList';
import productData from './components/ProductData.json';
const App = () => {

  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductList products={productData} />
    </div>
  );
};

export default App;