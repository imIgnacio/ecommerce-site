import React from 'react'
import './App.css';
import Products from './components/products/Products';
import Header from './components/header/Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <div className='products'>
        <h1><span className='colored'>HAVE A LOOK AT</span> OUR PRODUCTS</h1>
        <Products/>
      </div>
    </div>
  );
}

export default App;
