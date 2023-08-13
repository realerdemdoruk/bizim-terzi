"use client";
import React, { useState } from "react";
import Card from "@/app/components/Card";
import Price from "@/app/components/Price.json";
import { motion } from "framer-motion";

const item = {
  hidden: {
    opacity: 0,
    translateY: 50,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
};
const container = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const uniqueCategories = [...new Set(Price.map((item) => item.category))];

  return (
    <div>
      <h1 className="text-3xl mt-24 font-bold text-center p-4">
        Kategori Seçiniz
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center items-center  gap-4 mt-4"
      >
        {uniqueCategories.map((category) => {
          return (
            <motion.button
              variants={item}
              key={category}
              className={`${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-indigo-600 transition duration-1000 ease-in-out   "
              } px-4 py-2 rounded-md`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          );
        })}

        <motion.button
          variants={item}
          className={`${
            selectedCategory === ""
              ? "bg-indigo-600 text-white"
              : "bg-white text-indigo-600 transition duration-1000 ease-in-out   "
          } px-4 py-2 rounded-md`}
          onClick={() => setSelectedCategory("")}
        >
          Tümü
        </motion.button>
      </motion.div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <Card selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Page;
