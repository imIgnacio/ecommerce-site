import React from 'react'
import { getProducts } from '../../api/getProducts';
import { Item } from 'semantic-ui-react'
import { store } from '../../index';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRODUCTS, LOADING } from '../../types/types';
import Spinner from '../spinner/Spinner';

function Products() {

    const dispatch = useDispatch();
    const isLoading = useSelector( (state) => state.isLoading);
    const products = useSelector( (state) => state.products);

    React.useEffect( () => {
        dispatch({ type: LOADING })
        getProducts()
        .then((data) => dispatch({ type: GET_PRODUCTS, payload: data }))
    }, []);

    const items = [
        {
          childKey: 0,
          image: '/images/wireframe/image.png',
          header: 'Header',
          description: 'Description',
          meta: 'Metadata',
          extra: 'Extra',
        },
        {
          childKey: 1,
          image: '/images/wireframe/image.png',
          header: 'Header',
          description: 'Description',
          meta: 'Metadata',
          extra: 'Extra',
        },
      ]

    return <div className='products'>
        { isLoading? <Spinner/> : <Item.Group items={items} /> }
    </div>
}

export default Products