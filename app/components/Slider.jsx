"use client";
import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";

const Slider = ({ SliderData }) => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const intervalDuration = 4000; // 4 saniye
  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      nextSlide();
    }, intervalDuration);

    return () => {
      clearInterval(interval);
    };
  }, [current]);

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
    clearInterval(interval); // Otomatik geçişi durdur
    nextSlide(); // Hemen bir sonraki resme geç
    interval = setInterval(() => {
      nextSlide(); // Otomatik geçişi tekrar başlat
    }, intervalDuration);
  };

  const handlePrevButtonClick = () => {
    clearInterval(interval);
    prevSlide();
    interval = setInterval(() => {
      nextSlide();
    }, intervalDuration);
  };

  return (
    <div
      id="gallery"
      className="max-w-[2000px] mx-auto flex justify-center mb-12 bg-center"
    >
      <div className="relative flex justify-center">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-100 ease-in duration-200 max-h-full min-h-full"
                  : "opacity-0 max-h-full min-h-full"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2] lg:flex hidden"
                size={50}
              />

              {index === current && (
                <Image src={slide.image} alt="/" width={1440} height={600} />
              )}

              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2] lg:flex hidden"
                size={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
