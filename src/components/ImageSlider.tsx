import React, { useState, useEffect } from 'react';

interface SlideData {
  image: string;
  title: string;
  description: string;
}

interface ImageSliderProps {
  slides: SlideData[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  slides, 
  autoPlay = true, 
  autoPlayInterval = 4000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, slides.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-80 md:h-80 rounded-2xl overflow-hidden bg-gray-100 group">
      {/* Mobile Layout: Stacked, Desktop Layout: 60% Image, 40% Info */}
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <div className="relative w-full md:w-3/5 h-1/2 md:h-full">
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-black/20 md:to-black/10" />
        </div>

        {/* Information Section */}
        <div className="w-full md:w-2/5 h-1/2 md:h-full p-4 md:p-6 flex flex-col justify-center" style={{ backgroundColor: 'rgb(15 23 42 / 0.95)' }}>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
            {slides[currentIndex].title}
          </h3>
          <p className="text-white leading-relaxed text-xs md:text-sm line-clamp-3 md:line-clamp-none">
            {slides[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index: number) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary-500 scale-125' 
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentIndex + 1} / {slides.length}
      </div>
    </div>
  );
};

export default ImageSlider;
