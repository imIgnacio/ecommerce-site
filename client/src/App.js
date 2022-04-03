import React from 'react'
import './App.css';
import Products from './components/products/Products';

function App() {

  return (
    <div className="App">
      <h1>My Little Shop</h1>
      <div className='products'>
        <Products/>
      </div>
    </div>
  );
}

export default App;
