import React from 'react';
import Header from './Header';

const products = [
  {
    id: 1,
    name: 'Pet Food',
    description: 'High-quality pet food for your furry friends.',
    price: 10.99,
    link: 'https://5.imimg.com/data5/VM/HB/MY-7790175/6-kg-pet-food-500x500.jpg'
  },
  {
    id: 2,
    name: 'Pet Toys',
    description: 'Fun and interactive toys to keep your pets entertained.',
    price: 15.99,
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPas8W8bSaiBYWH7hE8ttW8sTn7avWGr_Df-PSVMjjp8O-YEuhAo9t5_4sb5BN9X_IvbY&usqp=CAU'
  },
  {
    id: 3,
    name: 'Pet Accessories',
    description: 'Accessories to make your pets look stylish and comfortable.',
    price: 19.99,
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLTSZrHIhAPdBo4PwSzTn3OnI_1e6j4vslw&usqp=CAU'
  }
];

const ProductList = () => {
  return (
    <div>
    <Header/>
    <div className="grid grid-cols-auto md:grid-cols-1 gap-4 px-4">
      {products.map(product => (
        <div key={product.id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src={product.link} alt="Product" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.name}</div>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <p className="mt-2 text-gray-600">Price: ${product.price}</p>
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Product</a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductList;
