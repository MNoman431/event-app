import React, { useState } from 'react';

const VoiceClients = () => {
  const testimonials = [
    {
      name: "Arslan Ali",
      comment: "I absolutely loved using this Gather Genie! It made planning my birthday party a breeze. The interface is user-friendly, and I could easily find vendors and services. Highly recommended!"
    },
    {
      name: "Mateen Saleem",
      comment: "I used it for my wedding, and it helped me find the perfect caterer and Car Rental. The reviews and ratings for vendors are super helpful. It made our big day even more special."
    },
    {
      name: "Syed Arslan",
      comment: "As an event planner, I rely on this app heavily. It simplifies my work by connecting me with reliable vendors. The reviews help me make informed decisions. It's a must-have tool in the event industry."
    },
    {
      name: "Hamza",
      comment: "Gather Genie Website is fantastic. I used it for ordering Catering service, and it connected me with top-notch amazing catering services. The reviews are spot on, and the whole process was seamless."
    },
    {
      name: "Ali",
      comment: "I used Gather Genie for my friend's surprise birthday party, and it exceeded my expectations. The reviews guided me to great catering and entertainment options."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Display 3 cards at a time
  const visibleTestimonials = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          The Voice of Our Clients
        </h1>

        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
            {visibleTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.name}-${index}`}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {testimonial.name}
                </h2>
                <p className="text-gray-600">
                  {testimonial.comment}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceClients;