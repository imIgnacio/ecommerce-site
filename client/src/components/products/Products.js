import React from 'react'
import { getProducts } from '../../api/getProducts';
import { store } from '../../index';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRODUCTS, LOADING } from '../../types/types';
import Spinner from '../spinner/Spinner';
import Card from '../card/Card';

function Products() {

    const dispatch = useDispatch();
    const isLoading = useSelector( (state) => state.isLoading);
    const products = useSelector( (state) => state.products);

    React.useEffect( () => {
        dispatch({ type: LOADING })
        getProducts()
        .then((data) => dispatch({ type: GET_PRODUCTS, payload: data }))
    }, []);

    return <>
        { isLoading? <Spinner/> : 
          products.map((element) => 
          <Card key={element.id} name={element.product_name} price={element.price} image={element.image} />) 
        }
    </>
}

export default Products