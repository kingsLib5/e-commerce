import React from 'react';

// Mock data for the current product and related products (bundle)
const product = {
  id: 1,
  name: 'Product 1',
  price: '$29.99',
  image: 'src/assets/product1.jpg',
  description: 'This is a great product that offers amazing features.',
  specifications: {
    weight: '1kg',
    dimensions: '10x5x2 inches',
    color: 'Black',
    warranty: '2 years',
  },
};

const frequentlyBoughtTogether = [
  {
    id: 2,
    name: 'Accessory 1',
    price: '$9.99',
    image: 'src/assets/product2.jpg',
  },
  {
    id: 3,
    name: 'Accessory 2',
    price: '$19.99',
    image: 'src/assets/product3.jpg',
  },
  {
    id: 4,
    name: 'Accessory 3',
    price: '$14.99',
    image: 'src/assets/product1.jpg',
  },
];

const ProductDetail = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Product Details */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/2">
            <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
            <p className="text-2xl font-semibold text-gray-700 mb-4">{product.price}</p>
            <p className="text-lg text-gray-600 mb-6">{product.description}</p>
            <ul className="text-gray-600 mb-6">
              <li><strong>Weight:</strong> {product.specifications.weight}</li>
              <li><strong>Dimensions:</strong> {product.specifications.dimensions}</li>
              <li><strong>Color:</strong> {product.specifications.color}</li>
              <li><strong>Warranty:</strong> {product.specifications.warranty}</li>
            </ul>
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Frequently Bought Together Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Frequently Bought Together</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frequentlyBoughtTogether.map(item => (
              <div key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4" />
                <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                <p className="text-lg font-semibold text-gray-700">{item.price}</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
