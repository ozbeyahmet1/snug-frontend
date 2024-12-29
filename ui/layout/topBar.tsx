'use client';

import React, { useEffect, useRef } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';

/**
 * TopBar Component
 *
 * A responsive, auto-sliding image slider with navigation buttons and indicators.
 * Each slide can have different content and background colors.
 *
 * @component
 */

export interface Slide {
  content: string;
  bgColor: string;
}

interface TopBarProps {
  /**
   * The content to display in the slider.
   */
  slides: Array<Slide>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}
const TopBar: React.FC<TopBarProps> = ({ slides, currentIndex, setCurrentIndex }) => {
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  /**
   * Move to the next slide in the slider.
   */
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  /**
   * Move to the previous slide in the slider.
   */
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    // Start auto-slide on mount
    slideInterval.current = setInterval(nextSlide, 6000);

    return () => {
      // Clear interval on unmount
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  return (
    <div className="fixed overflow-hidden w-full top-0 z-[999]">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides?.map((slide, index) => (
          <div
            key={index}
            className={`w-full text-sm flex-shrink-0 h-8 flex items-center justify-center text-white ${slide.bgColor}`}>
            {slide.content}
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 lg:left-[20%] transform -translate-y-1/2 z-10 text-white rounded-full flex items-center justify-center">
        <IoChevronBackOutline size={20} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 lg:right-[20%] scale-x-[-1] transform -translate-y-1/2 z-10 text-white rounded-full flex items-center justify-center ">
        <IoChevronBackOutline size={20} />
      </button>
    </div>
  );
};

export default TopBar;
