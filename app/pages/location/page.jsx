import React from "react";
import Location from "@/app/components/Location";

const page = () => {
  return (
    <div className="mt-24">
      <h1 className="text-3xl mt-24 font-bold text-center p-4">
        İşletmemizin Konumu
      </h1>
      <Location />
    </div>
  );
};

export default page;
