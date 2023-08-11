"use client";
import React from "react";
import { motion } from "framer-motion";
import Price from "./Price.json";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

import { useState } from "react";

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
const Card = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        class="flex flex-wrap justify-center mt-10"
      >
        {pathname === "/" &&
          Price.slice(0, 5).map((price) => {
            return (
              // <Link href="/pages/price/[id]" as={`/pages/price/${price.id}`}>
              <motion.div variants={item} class="p-4 max-w-sm" key={price.id}>
                <div class="flex  rounded-lg h-full bg-teal-400 p-8 flex-col hover:bg-teal-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <div className="flex justify-center">
                    <Image
                      src={price.image}
                      alt="/"
                      width="250"
                      height="250"
                      className="rounded-lg"
                    />
                  </div>
                  <h2 class="text-white text-lg font-medium flex mt-3 cursor-pointer justify-center ">
                    {price.name}
                  </h2>
                  {/* </div> */}
                  <div class="flex flex-col justify-between flex-grow">
                    <p class="leading-relaxed text-base text-white cursor-pointer">
                      {price.description}
                    </p>
                    <p class="leading-relaxed text-base text-slate-800 cursor-pointer">
                      {price.price}
                    </p>
                    <span
                      onClick={() => router.push(`/pages/price/${price.id}`)}
                      href="#"
                      class="mt-3  text-black hover:text-blue-600 inline-flex items-center cursor-pointer
                      transition duration-500 ease-in-out transform  hover:scale-105"
                    >
                      Detalı Bilgi
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2 "
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>{" "}
                </div>
              </motion.div>

              // </Link>
            );
          })}{" "}
        {pathname === "/pages/fees" &&
          Price.map((price, index) => {
            return (
              <motion.div key={index} variants={item} class="p-4 max-w-sm">
                <div class="flex  rounded-lg h-full bg-teal-400 p-8 flex-col hover:bg-teal-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <div className="flex justify-center">
                    <Image
                      src={price.image}
                      alt="/"
                      width="250"
                      height="250"
                      className="rounded-lg"
                    />
                  </div>

                  <h2 class="text-white text-lg font-medium flex mt-3 cursor-pointer justify-center ">
                    {price.name}
                  </h2>
                  {/* </div> */}
                  <div class="flex flex-col justify-between flex-grow">
                    <p class="leading-relaxed text-base text-white cursor-pointer">
                      {price.description}
                    </p>
                    <p class="leading-relaxed text-base text-slate-800 cursor-pointer">
                      {price.price}
                    </p>
                    <span
                      href="#"
                      class="mt-3  text-black hover:text-blue-600 inline-flex items-center cursor-pointer
                      transition duration-500 ease-in-out transform  hover:scale-105"
                      onClick={() => router.push(`/pages/price/${price.id}`)}
                    >
                      Detalı Bilgi
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
      </motion.div>

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
};

export default Card;
