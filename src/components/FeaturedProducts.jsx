import React, { useEffect, useState } from 'react';

const featuredProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: '$29.99',
    image: 'src/assets/product1.jpg',
    isTrending: true,
    viewingNow: 5, // Mocking real-time viewers count
    recentlyBought: 2, // Mocking recent purchases count
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$49.99',
    image: 'src/assets/product2.jpg',
    isTrending: false,
    viewingNow: 3,
    recentlyBought: 4,
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$19.99',
    image: 'src/assets/product3.jpg',
    isTrending: true,
    viewingNow: 7,
    recentlyBought: 1,
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$99.99',
    image: 'src/assets/product11.jpg',
    isTrending: false,
    viewingNow: 2,
    recentlyBought: 3,
  },
  {
    id: 5,
    name: 'Product 5',
    price: '$29.99',
    image: 'src/assets/product4.jpg',
    isTrending: true,
    viewingNow: 5, // Mocking real-time viewers count
    recentlyBought: 2, // Mocking recent purchases count
  },
  {
    id: 6,
    name: 'Product 6',
    price: '$49.99',
    image: 'src/assets/product5.jpg',
    isTrending: false,
    viewingNow: 3,
    recentlyBought: 4,
  },
  {
    id: 7,
    name: 'Product 7',
    price: '$19.99',
    image: 'src/assets/product6.jpg',
    isTrending: true,
    viewingNow: 7,
    recentlyBought: 1,
  },
  {
    id: 8,
    name: 'Product 8',
    price: '$99.99',
    image: 'src/assets/product7.jpg',
    isTrending: false,
    viewingNow: 2,
    recentlyBought: 3,
  },
];


const FeaturedProducts = () => {
  const [products, setProducts] = useState(featuredProducts);

  // Mocking real-time updates every few seconds (for now)
  useEffect(() => {
    const interval = setInterval(() => {
      setProducts(prevProducts =>
        prevProducts.map(product => ({
          ...product,
          viewingNow: product.viewingNow + Math.floor(Math.random() * 3), // Mock new viewers
          recentlyBought: product.recentlyBought + Math.floor(Math.random() * 2), // Mock new purchases
        }))
      );
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg relative">
              {/* Trending Badge */}
              {product.isTrending && (
                <span className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs">
                  Trending
                </span>
              )}
              
              {/* Real-Time Activity */}
              <div className="absolute top-2 right-2 text-xs text-gray-500">
                {product.viewingNow > 0 && (
                  <p>{product.viewingNow} people are viewing this now</p>
                )}
                {product.recentlyBought > 0 && (
                  <p>{product.recentlyBought} users bought this recently</p>
                )}
              </div>

              <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-lg font-semibold text-gray-700">{product.price}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
