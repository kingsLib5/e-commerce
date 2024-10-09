import React, { useState } from 'react';

const Checkout = () => {
  // Form states
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  // Handle input changes for shipping details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({
      ...shippingDetails,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling the order submission
    console.log('Order submitted:', shippingDetails, paymentMethod);
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Checkout</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shipping Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Shipping Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={shippingDetails.name}
                onChange={handleInputChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={shippingDetails.email}
                onChange={handleInputChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={shippingDetails.phone}
                onChange={handleInputChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={shippingDetails.address}
                onChange={handleInputChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={shippingDetails.city}
                onChange={handleInputChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={shippingDetails.state}
                onChange={handleInputChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                required
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                value={shippingDetails.zip}
                onChange={handleInputChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Payment Method</h3>
            <div className="grid grid-cols-1 gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit-card"
                  checked={paymentMethod === 'credit-card'}
                  onChange={() => setPaymentMethod('credit-card')}
                  className="mr-2"
                />
                Credit/Debit Card
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                  className="mr-2"
                />
                PayPal
              </label>
              {/* Additional payment methods can be added here */}
            </div>
          </div>
        </form>

        {/* Order Summary and Place Order Button */}
        <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
          <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
          {/* Mock Order Summary */}
          <div className="mb-4">
            <p className="text-lg">Subtotal: $89.97</p>
            <p className="text-lg">Shipping: $5.99</p>
            <p className="text-lg font-semibold">Total: $95.96</p>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
