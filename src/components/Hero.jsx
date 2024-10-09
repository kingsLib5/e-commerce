import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/assets/ecom.mp4"
        autoPlay
        muted
        loop
      />
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <h1 className="text-6xl font-bold text-black">Welcome to Your Store</h1>
        <p className="text-lg mt-4 text-gray-200">Discover top deals and trends tailored for you</p>
      </div>
    </div>
  );
}

export default Hero;
