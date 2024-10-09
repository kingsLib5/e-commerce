import React from 'react';

const OrderConfirmation = () => {
  // Mock data for demonstration
  const orderNumber = 'ORD123456789';
  const shippingDetails = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Cityville, CA 90210',
    city: 'Cityville',
    state: 'CA',
    zip: '90210',
  };
  const orderSummary = [
    { name: 'Product 1', price: '$29.99', quantity: 1 },
    { name: 'Product 2', price: '$19.99', quantity: 2 },
  ];
  const totalCost = '$95.96';

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Thank You for Your Order!</h2>
          <p className="text-center text-lg mb-8">Your order has been placed successfully.</p>

          {/* Order Number */}
          <div className="text-center mb-8">
            <p className="text-lg">Order Number:</p>
            <p className="text-xl font-semibold">{orderNumber}</p>
          </div>

          {/* Shipping Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Shipping Information</h3>
            <div className="text-lg">
              <p>{shippingDetails.name}</p>
              <p>{shippingDetails.email}</p>
              <p>{shippingDetails.phone}</p>
              <p>{shippingDetails.address}, {shippingDetails.city}, {shippingDetails.state} {shippingDetails.zip}</p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-4">
              {orderSummary.map((item, index) => (
                <div key={index} className="flex justify-between text-lg">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Total Cost */}
          <div className="text-right text-2xl font-semibold mb-8">
            <p>Total: {totalCost}</p>
          </div>

          {/* Back to Shopping Button */}
          <div className="text-center">
            <button
              onClick={() => window.location.href = '/'}
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600"
            >
              Back to Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
