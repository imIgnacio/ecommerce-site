const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
    image: 'familiaPetLogo.JPG',
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
    image: 'https://www.childrensalonoutlet.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/m/a/mayoral-boys-blue-leather-trainers-403935-9526967c1a13aa4c758f0b052268e6d38205dd60.jpg',
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
    image: 'https://cdn.shopify.com/s/files/1/1235/3552/products/heather-rambler-wax-trilby-hat__2485_256x256_crop_center.jpg?v=1572707053',
  },
  {
    product_name: 'Trousers',
    price: 12.99,
    stock: 50,
    category_id: 3,
    image: 'https://images.sfo-cdn.com/normal/M94B35-WC840-P79N/2-side.jpg',
  },
  {
    product_name: 'Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
    image: 'https://cdn.childrensalon.com/media/catalog/product/cache/0/small_image/256x256/9df78eab33525d08d6e5fb8d27136e95/a/g/agatha-ruiz-de-la-prada-girls-white-avocado-shorts-427310-fac1683ddbffb7ae731264a1822ff7a125fddfdb.jpg',
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;