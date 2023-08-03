"use client";
import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";
import Price from "./Price.json";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const intervalDuration = 4000; // 4 saniye

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, intervalDuration);

    return () => {
      clearInterval(interval);
    };
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div
      id="gallery"
      className="max-w-[2000px] mx-auto flex justify-center mb-12 bg-center h-auto"
    >
      <div className="relative flex justify-center">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2] lg:flex hidden"
                size={50}
              />

              {index === current && (
                <Image
                  src={slide.image}
                  alt="/"
                  width="1440"
                  height="600"
                  style={{ objectFit: "cover" }}
                />
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
