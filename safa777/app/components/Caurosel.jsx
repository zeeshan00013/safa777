"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import safa1 from "../Images/safa1.PNG";
import safa2 from "../Images/safa2.PNG";
import safa3 from "../Images/safa3.PNG";
import safa4 from "../Images/safa4.PNG";
import safa5 from "../Images/safa5.PNG";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomCarousel() {
  const images = [
    { src: safa1, alt: "safa images" },
    { src: safa2, alt: "safa777 Game Referral" },
    { src: safa3, alt: "Secure Deposit safa777" },
    { src: safa4, alt: "Agent setup" },
    { src: safa5, alt: "promotions" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-10 px-4 sm:px-6 text-white max-w-5xl mx-auto">
      <div className="">
        <h2 className="text-4xl text-[#53A700] font-semibold md:text-5xl leading-13 text-center">
          Images
        </h2>

        <div className="relative overflow-hidden rounded-xl shadow-lg mt-6">
          <div className="relative w-full ">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={900}
              height={600}
              className="object-contain transition-all duration-500"
              priority
            />
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/40 p-2 rounded-full hover:bg-black/60 transition z-10"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/40 p-2 rounded-full hover:bg-black/60 transition z-10"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? "bg-[#f0c059]" : "bg-white/30"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
