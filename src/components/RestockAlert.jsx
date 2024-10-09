import React, { useState } from 'react';

const RestockAlert = ({ product }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Fallback product if it's not passed
  const defaultProduct = {
    id: 0,
    name: 'Product'
  };

  const currentProduct = product || defaultProduct; // Use the passed product or fallback

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Mock API Call
    if (email) {
      setSubscribed(true);
      setMessage(`Thank you! You'll be notified when ${currentProduct.name} is back in stock.`);
      
      // Store subscription in the backend (mocked for now)
      console.log('User subscribed:', { email, productId: currentProduct.id });
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      {!subscribed ? (
        <form onSubmit={handleSubscribe}>
          <h2 className="text-2xl font-bold mb-4">Get Notified When It's Back in Stock</h2>
          <p className="mb-4">{currentProduct.name} is currently out of stock. Enter your email below to receive a restock alert.</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Notify Me
          </button>
        </form>
      ) : (
        <p className="text-green-600">{message}</p>
      )}
    </div>
  );
};

export default RestockAlert;
