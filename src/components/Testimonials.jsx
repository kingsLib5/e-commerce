import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      review: 'This store has the best deals! The product quality is amazing and delivery is super fast.',
      rating: 5,
      image: 'src/assets/person2.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'I love shopping here. The variety of products and customer service are unmatched.',
      rating: 4,
      image: 'src/assets/person1.jpg',
    },
    {
      id: 3,
      name: 'Michael Lee',
      review: 'The prices are great, and I always find what I’m looking for. Highly recommend!',
      rating: 5,
      image: 'src/assets/person3.jpg',
    },
  ];

  const danglingEffect = {
    animate: {
      rotate: [0, 10, -10, 10, 0], // Back-and-forth rotation values
      transition: {
        repeat: Infinity,
        duration: 1,  // Duration for one complete swing cycle
        repeatDelay: 5,  // 5 seconds delay between each cycle
        ease: 'easeInOut',
      },
    },
  };

  const imageHoverEffect = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="testimonials bg-white py-16">
      <h2 className="text-4xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="bg-gray-100 p-8 rounded-lg shadow-lg text-center"
            variants={danglingEffect}
            animate="animate"
          >
            <motion.img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              variants={imageHoverEffect}
              whileHover="hover"
            />
            <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
            <div className="flex justify-center mt-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
            <p className="text-gray-600 mt-4">{testimonial.review}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
