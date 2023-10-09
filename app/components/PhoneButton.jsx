"use client";
import { useEffect } from "react";
import Image from "next/image";

const PhoneButton = () => {
  useEffect(() => {
    const handleButtonClick = () => {
      const telefonNumarasi = "05439513982";
      const aramaURL = "tel:" + telefonNumarasi;
      window.location.href = aramaURL;
    };

    const button = document.getElementById("telefonButton");
    button.addEventListener("click", handleButtonClick);

    return () => {
      button.removeEventListener("click", handleButtonClick);
    };
  }, []);

  return (
    <button
      id="telefonButton"
      className="fixed bottom-0 right-0 w-16 h-16 m-4 bg-white rounded-full text-white flex items-center justify-center"
    >
      <Image src="/images/phone.png" alt="whatsapp" width={24} height={24} />
    </button>
  );
};

export default PhoneButton;
