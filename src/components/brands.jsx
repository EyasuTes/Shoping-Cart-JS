import React, { useState, useEffect } from "react";
import logos from "../data/logos.json";

export default function Brands() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="flex items-center lg:mx-12  my-12">
      <div className="text-white font-bold text-2xl">Brand Parts</div>
      <div
        className="lg:ml-40  bg-black flex gap-4 flex-wrap p-8"
        style={{
          clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)",
          boxShadow: "inset 10px 10px 20px 10px rgba(100,0,0,0.9)",
        }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            // style={{ width: "200px", height: "200px" }}
            className="lg:w-48 w-12 "
          >
            <img
              src={logo.img}
              style={{ width: "100%" }}
              className="hover:scale-90 transition-transform duration-300 transform"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
