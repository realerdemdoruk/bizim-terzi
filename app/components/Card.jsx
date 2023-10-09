"use client";
import React from "react";
import { motion } from "framer-motion";
import Price from "../data/Price.json";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

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

export default function Card({ selectedCategory = "" }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div class="min-h-screen  flex justify-center flex-col items-center py-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        // class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 flex justify-center gap-5 space-y-4 md:space-y-0 "
        class="flex  flex-wrap justify-center gap-5 space-y-4 md:space-y-0 mt-10"
      >
        {/* Buradan itibaren dön */}
        {pathname === "/" &&
          Price.slice(0, 5).map((price) => {
            return (
              <motion.div
                variants={item}
                key={price.id}
                class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg hover:gap-2 transform hover:scale-105 transition duration-500"
              >
                <h3 class="mb-3 text-xl font-bold italic text-indigo-600">
                  {/* Beginner Friendly */}
                  {price.category}
                </h3>
                <div class="relative">
                  <Image
                    src={price.image}
                    alt="/"
                    width={500}
                    height={500}
                    className="rounded-lg  w-full "
                  />
                  <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                    {price.price}
                  </p>
                </div>

                <h1 class="mt-4 text-center text-gray-800 text-lg md:text-2xl justify-center  flex flex-wrap  font-bold cursor-pointer">
                  {price.name}
                </h1>
                <div class="my-4">
                  <div class="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <p className="text-slate-700">{price.time}</p>
                  </div>
                  {/* <div class="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <p className="text-slate-700">{price.description}</p>
                  </div> */}
                  <div class="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </span>
                    <p className="text-slate-700">{price.description}</p>
                  </div>
                  <button
                    onClick={() => router.push(`/pages/price/${price.id}`)}
                    class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg"
                  >
                    Daha Fazla Bilgi
                  </button>
                </div>
              </motion.div>
            );
          })}
        {pathname === "/pages/fees" &&
          Price.filter(
            (price) =>
              selectedCategory === "" || price.category === selectedCategory
          ).map((price) => {
            return (
              <motion.div
                variants={item}
                key={price.id}
                class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg hover:gap-2 transform hover:scale-105 transition duration-500"
              >
                <h3 class="mb-3 text-xl font-bold italic text-indigo-600">
                  {price.category}
                </h3>
                <div class="relative">
                  <Image
                    src={price.image}
                    alt="/"
                    width={500}
                    height={500}
                    className="rounded-lg  w-full "
                  />
                  <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                    {price.price}
                  </p>
                </div>

                <h1 class="mt-4 text-center text-gray-800 text-lg md:text-2xl justify-center  flex flex-wrap  font-bold cursor-pointer">
                  {price.name}
                </h1>
                <div class="my-4">
                  <div class="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <p className="text-slate-700">{price.time}</p>
                  </div>
                  <div class="flex space-x-1 items-center">
                    {/* <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-600 mb-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span> */}
                    {/* <p className="text-slate-700">{item.description}</p> */}
                  </div>
                  <div class="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </span>
                    <p className="text-slate-700">{price.description}</p>
                  </div>
                  <button
                    onClick={() => router.push(`/pages/price/${price.id}`)}
                    class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg"
                  >
                    Daha Fazla Bilgi
                  </button>
                </div>
              </motion.div>
            );
          })}
      </motion.div>{" "}
      {pathname === "/" && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => router.push("/pages/fees")}
            className="bg-blue-500 mb-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform  hover:scale-105"
          >
            Bütün Fiyatları Göster
          </button>
        </div>
      )}
    </div>
  );
}
