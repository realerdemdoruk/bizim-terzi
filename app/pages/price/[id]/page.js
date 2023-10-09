import React from "react";
import Price from "../../../data/Price.json";
import Image from "next/image";

export default function Page({ params }) {
  return (
    <div className="flex flex-col items-center justify-center mt-24 h-screen">
      {Price.map((item) => {
        if (item.id == params.id) {
          return (
            <div
              key={item.id}
              className="flex flex-col-reverse md:flex-row justify-center items-center gap-10"
            >
              <div className="order-2 px-3 md:order-1">
                <Image
                  src={item.image}
                  alt="/"
                  width="600"
                  height="600"
                  className="rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2 md:p-0 p-16 md:text-left  text-center">
                <p className="mt-3 text-2xl font-semibold">{item.name}</p>
                <p className="mt-3 text-gray-500">{item.description}</p>
                <p className="mt-3 text-base font-bold">{item.price}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
