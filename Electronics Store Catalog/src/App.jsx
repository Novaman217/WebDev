import React, { useState } from 'react';
import { products } from './data/products';
import ProductCard from './components/ProductCard';

function App() {
  
  const [maxPrice, setMaxPrice] = useState(1500);

  const filteredProducts = products.filter((product) => product.price <= maxPrice);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       
        <header className="mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              TechStore Catalog
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Browse our latest premium electronic gadgets
            </p>
          </div>
          <div className="mt-4 sm:mt-0 text-sm text-gray-600 font-medium">
            Showing <span className="text-blue-600 font-bold">{filteredProducts.length}</span> of {products.length} Products
          </div>
        </header>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8 max-w-md">
          <label htmlFor="priceRange" className="block text-sm font-semibold text-gray-700 mb-2">
            Filter Max Price: <span className="text-blue-600 font-bold">${maxPrice}</span>
          </label>
          <input
            id="priceRange"
            type="range"
            min="30"
            max="1500"
            step="20"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>$30</span>
            <span>$750</span>
            <span>$1500</span>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
            <p className="text-lg text-gray-500 font-medium">
              No products found under <span className="font-bold">${maxPrice}</span>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;