import React from 'react'
import { getProducts } from '../../api/getProducts';
import { Item } from 'semantic-ui-react'


function Products(props) {
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

    return (
    <Item.Group items={items} />
    )
}

export default Products