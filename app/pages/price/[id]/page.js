"use client";
import React from "react";
import Price from "../../../components/Price.json";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Page({ params }) {
  console.log(params);
  return (
    <div className="flex flex-col items-center justify-center mt-24 h-screen">
      {/* {params.id} */}

      {Price.map((item) => {
        if (item.id == params.id) {
          return (
            <div
              key={item.id}
              className="flex flex-col-reverse md:flex-row justify-center items-center gap-10"
            >
              <div className="order-2 md:order-1">
                <Image
                  src={item.image}
                  alt="/"
                  width="250"
                  height="250"
                  className="rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2 md:p-0 p-16 md:text-left text-center">
                <p className="mt-3 text-lg font-semibold  ">{item.name}</p>
                <p className="mt-3 text-gray-500 ">{item.description}</p>
                <p className="mt-3 text-xl font-bold">{item.price}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
