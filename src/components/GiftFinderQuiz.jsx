import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const productsData = {
  Accessories: [
    { id: 1, name: 'Leather Wallet', price: '$30', image: 'src/assets/product1.jpg' },
    { id: 2, name: 'Silver Bracelet', price: '$45', image: 'src/assets/product1.jpg' },
  ],
  Electronics: [
    { id: 3, name: 'Smart Watch', price: '$120', image: 'src/assets/product1.jpg' },
    { id: 4, name: 'Wireless Earbuds', price: '$85', image: 'src/assets/product1.jpg' },
  ],
  Clothing: [
    { id: 5, name: 'Designer T-Shirt', price: '$60', image: 'src/assets/product1.jpg' },
    { id: 6, name: 'Jeans', price: '$75', image: 'src/assets/product1.jpg' },
  ],
};

const GiftFinderQuiz = () => {
  const [step, setStep] = useState(1);
  const [recipient, setRecipient] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [category, setCategory] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    console.log('Selected Category:', category); // Log category for debugging
    if (category) {
      // Fetch product recommendations based on category
      const products = productsData[category] || [];
      console.log('Fetched products:', products); // Log fetched products
      setRecommendations(products);
    }
  }, [category]); // This useEffect runs whenever category changes

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmitQuiz = (selectedCategory) => {
    setCategory(selectedCategory);
    setStep(4); // Proceed to recommendations display after category is set
  };

  const handleImageError = (event) => {
    event.target.src = '/assets/default-product.jpg'; // Fallback image
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <motion.h2 
        className="text-3xl font-bold text-center mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Find the Perfect Gift
      </motion.h2>

      {step === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h3 className="text-xl mb-4">Who is the gift for?</h3>
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => { setRecipient('Friend'); handleNextStep(); }} 
              className="p-4 bg-blue-500 text-white rounded-lg">
              Friend
            </button>
            <button 
              onClick={() => { setRecipient('Family'); handleNextStep(); }} 
              className="p-4 bg-green-500 text-white rounded-lg">
              Family
            </button>
            <button 
              onClick={() => { setRecipient('Coworker'); handleNextStep(); }} 
              className="p-4 bg-purple-500 text-white rounded-lg">
              Coworker
            </button>
          </div>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h3 className="text-xl mb-4">What is your price range?</h3>
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => { setPriceRange('$0 - $50'); handleNextStep(); }} 
              className="p-4 bg-yellow-500 text-white rounded-lg">
              $0 - $50
            </button>
            <button 
              onClick={() => { setPriceRange('$50 - $100'); handleNextStep(); }} 
              className="p-4 bg-red-500 text-white rounded-lg">
              $50 - $100
            </button>
            <button 
              onClick={() => { setPriceRange('$100+'); handleNextStep(); }} 
              className="p-4 bg-blue-500 text-white rounded-lg">
              $100+
            </button>
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h3 className="text-xl mb-4">What type of product are you looking for?</h3>
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => { handleSubmitQuiz('Accessories'); }} 
              className="p-4 bg-indigo-500 text-white rounded-lg">
              Accessories
            </button>
            <button 
              onClick={() => { handleSubmitQuiz('Electronics'); }} 
              className="p-4 bg-pink-500 text-white rounded-lg">
              Electronics
            </button>
            <button 
              onClick={() => { handleSubmitQuiz('Clothing'); }} 
              className="p-4 bg-teal-500 text-white rounded-lg">
              Clothing
            </button>
          </div>
        </motion.div>
      )}

      {step === 4 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h3 className="text-xl mb-4">Recommended Gifts:</h3>
          {recommendations.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {recommendations.map((product) => (
                <motion.div
                  key={product.id}
                  className="border p-4 rounded-lg shadow-lg"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-40 object-cover rounded-lg mb-4"
                    onError={handleImageError} // Fallback to default image if image is missing
                  />
                  <h4 className="text-lg font-semibold">{product.name}</h4>
                  <p className="text-gray-600">{product.price}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <p>No products available for this category.</p>
          )}
        </motion.div>
      )}

      {step > 1 && step < 4 && (
        <button 
          onClick={handlePreviousStep} 
          className="mt-4 bg-gray-500 text-white py-2 px-6 rounded-lg">
          Back
        </button>
      )}
    </div>
  );
};

export default GiftFinderQuiz;
