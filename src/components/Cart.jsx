import React, { useState } from 'react';

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    quantity: 1,
    image: 'src/assets/product2.jpg',
  },
  {
    id: 2,
    name: 'Accessory 1',
    price: 9.99,
    quantity: 2,
    image: 'src/assets/product1.jpg',
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Function to update item quantity
  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to remove item from cart
  const removeItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="ml-4">
                      <h4 className="text-xl font-bold">{item.name}</h4>
                      <p className="text-lg text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={e => updateQuantity(item.id, Number(e.target.value))}
                      className="w-16 py-2 px-3 border border-gray-300 rounded-lg text-center"
                    />
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
              <div className="mb-4">
                <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
                <p className="text-gray-600 text-sm mt-2">
                  *Taxes and shipping are calculated at checkout
                </p>
              </div>
              <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-lg text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
