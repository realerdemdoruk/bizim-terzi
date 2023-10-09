import React from "react";

const Location = () => {
  return (
    <div
      id="location"
      className="max-w-[1240px] flex m-auto  justify-center items-center p-4 text-white"
    >
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1OccaWWpfSSIbq7yLmlKkzqipORQgkyU&ehbc=2E312F"
        width="1240"
        height="800"
      ></iframe>
    </div>
  );
};

export default Location;
