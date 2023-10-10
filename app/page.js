import Image from "next/image";
import Slider from "./components/Slider";
import Location from "./components/Location";
import Card from "./components/Card";
import image1 from "../public/images/img1.jpg";
import image2 from "../public/images/img2.jpg";
import image3 from "../public/images/img3.jpg";

export default function Home() {
  const SliderData = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
  ];

  return (
    <div>
      {/* <Slider /> */}
      <Slider SliderData={SliderData} />
      {/* <Dis /> */}
      <h3 className="text-3xl font-semibold mb-10 text-center text-gray-800 dark:text-gray-100">
        Neredeyiz?
      </h3>
      <Location />
      <h3 className="text-3xl mt-10 font-semibold text-center text-gray-800 dark:text-gray-100">
        Bazı Fiyatlar
      </h3>
      <Card />
    </div>
  );
}
