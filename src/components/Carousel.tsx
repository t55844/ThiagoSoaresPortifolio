// src/components/Carousel.tsx
import React, { useState, useEffect } from "react";

export default function Carousel(props: { images: string[] }) {
  const { images } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000); // Change image every 10 seconds

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-full h-auto"
      />
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-l-md"
        onClick={nextImage}
      >
        ⏭️
      </button>
    </div>
  );
}
