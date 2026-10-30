import React from 'react';


const ProductCard = ({ product }) => {
  
  const { name, price, category, image, inStock } = product;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col justify-between">
      <div>
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 object-cover object-center"
          />
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-2 mb-2">
            {name}
          </h3>
          
          <div className="flex items-center justify-between mt-2">
            <span className="text-2xl font-extrabold text-blue-600">
              ${price}
            </span>
            <span className={`text-xs font-semibold px-2 py-1 rounded ${inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 pt-0 mt-auto">
        <button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;