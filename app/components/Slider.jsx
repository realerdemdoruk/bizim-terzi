"use client";
import React, { useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";

const Slider = ({ SliderData }) => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const intervalDuration = 4000000; // 4 saniye
  const intervalRef = useRef(null); // useRef ile interval'ı saklayın

  const [imagesLoaded, setImagesLoaded] = useState(
    new Array(length).fill(false)
  );

  const nextSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === length - 1 ? 0 : prevCurrent + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? length - 1 : prevCurrent - 1
    );
  };

  const handleNextButtonClick = () => {
    clearInterval(intervalRef.current); // useRef ile interval'a erişin
    nextSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, intervalDuration);
  };

  const handlePrevButtonClick = () => {
    clearInterval(intervalRef.current); // useRef ile interval'a erişin
    prevSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, intervalDuration);
  };

  const handleImageLoad = (index) => {
    const loadedImages = [...imagesLoaded];
    loadedImages[index] = true;
    setImagesLoaded(loadedImages);
  };

  return (
    <div
      id="gallery"
      className="max-w-[2000px] mx-auto flex justify-center mb-12 bg-center"
    >
      <div className="relative flex justify-center">
        {SliderData.map((slide, index) => {
          return (
            <div key={index} className={" max-h-full min-h-full"}>
              <FaArrowCircleLeft
                onClick={handlePrevButtonClick}
                className="absolute top-[50%]
                left-[30px] text-white/70 cursor-pointer select-none z-[2] lg:flex w-9 h-9 lg:w-14 lg:h-14"
              />

              {index === current && (
                <Image
                  src={slide.image}
                  alt="/"
                  width={1440}
                  height={600}
                  onLoad={() => handleImageLoad(index)}
                />
              )}

              <FaArrowCircleRight
                onClick={handleNextButtonClick}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2] lg:flex w-9 h-9 lg:w-14 lg:h-14"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
