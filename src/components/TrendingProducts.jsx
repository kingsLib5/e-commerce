import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TrendingProducts = () => {
  // Array of trending product data for the first row
  const firstRowItems = [
    { id: 1, name: 'Product 1', price: '$100', image: 'src/assets/product1.jpg' },
    { id: 2, name: 'Product 2', price: '$120', image: 'src/assets/product2.jpg' },
    { id: 3, name: 'Product 3', price: '$150', image: 'src/assets/product3.jpg' },
    { id: 4, name: 'Product 4', price: '$180', image: 'src/assets/product4.jpg' },
    { id: 5, name: 'Product 5', price: '$110', image: 'src/assets/product5.jpg' },
    { id: 6, name: 'Product 6', price: '$130', image: 'src/assets/product6.jpg' },
  ];

  // Array of trending product data for the second row
  const secondRowItems = [
    { id: 7, name: 'Product 7', price: '$90', image: 'src/assets/product7.jpg' },
    { id: 8, name: 'Product 8', price: '$140', image: 'src/assets/product8.jpg' },
    { id: 9, name: 'Product 9', price: '$170', image: 'src/assets/product9.jpg' },
    { id: 10, name: 'Product 10', price: '$190', image: 'src/assets/product10.jpg' },
    { id: 11, name: 'Product 11', price: '$115', image: 'src/assets/product11.jpg' },
    { id: 12, name: 'Product 12', price: '$135', image: 'src/assets/product12.jpg' },
  ];

  // Slider settings for the first carousel (first row)
  const settingsFirstRow = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 3 products at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // 3 seconds for first row
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Slider settings for the second carousel (second row)
  const settingsSecondRow = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 3 products at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 5 seconds for second row
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="trending-products py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">Trending Products</h2>

      {/* First Row of Trending Products */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-4">Latest Arrivals</h3>
        <Slider {...settingsFirstRow}>
          {firstRowItems.map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h4 className="text-xl font-bold">{item.name}</h4>
                <p className="text-lg text-gray-700 mt-2">{item.price}</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Second Row of Trending Products */}
      <div>
        <h3 className="text-2xl font-bold text-center mb-4">Top Picks for You</h3>
        <Slider {...settingsSecondRow}>
          {secondRowItems.map((item) => (
            <div key={item.id} className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h4 className="text-xl font-bold">{item.name}</h4>
                <p className="text-lg text-gray-700 mt-2">{item.price}</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingProducts;
