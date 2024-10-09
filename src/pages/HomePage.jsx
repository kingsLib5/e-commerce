import React from 'react';
import Hero from '../components/Hero'; // Assuming the Hero component is already created
import FeaturedProducts from '../components/FeaturedProducts'; // New featured products section
// import Navbar from '../components/Navbar';
import TrendingProducts from '../components/TrendingProducts';
import Testimonials from '../components/Testimonials';
import GiftFinderQuiz from '../components/GiftFinderQuiz';
import RestockAlert from '../components/RestockAlert';
import Footer from '../components/Footer';



const product = {
  id: 1,
  name: 'Exclusive Jacket'
};

const HomePage = () => {
  return (
    <div>


      {/* Hero Section */}
      <Hero />

      {/* trending products */}
      <TrendingProducts/>
      
      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Gift finder */}
      <GiftFinderQuiz/>

      {/* Testimonials  */}
      <Testimonials/>

      <RestockAlert product={product} />

      <Footer/>

      {/* Additional sections like Trending Products, Gift Finder, etc., can be added later */}
    </div>
  );
};

export default HomePage;
