import React from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './index';
import Spinner from './components/spinner/Spinner';
import Product from './components/product/Product';
import { getProducts } from './api/getProducts';
import { GET_PRODUCTS, LOADING } from './types/types';

function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector( (state) => state.isLoading);
  const products = useSelector( (state) => state.products);

  React.useEffect( () => {
    dispatch({ type: LOADING })
    getProducts()
    .then((data) => dispatch({ type: GET_PRODUCTS, payload: data }))
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      {isLoading? <Spinner/> : products.map((character, index) => {
        return <Product image={character.image} name={character.name} house={character.house} />;
        })
      }
    </div>
  );
}

export default App;
