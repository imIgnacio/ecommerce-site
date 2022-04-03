import React from 'react'
import { getProducts } from '../api/getProducts';

function Products() {
    var array;

    React.useEffect(async () => {

        //Getting products from API
        array = await getProducts();
        console.log(array);
    },[]);

    return (
    <div>
        <h2>Products</h2>
    </div>
    )
}

export default Products