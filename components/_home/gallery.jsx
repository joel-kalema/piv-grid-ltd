'use client';

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import { FiLoader } from "react-icons/fi";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function MasonryGridGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track loading state for images

  const images = [
    "/pics/pic9.jpg",
    "/pics/pic12.jpg",
    "/pics/pic5.jpg",
    "/pics/pic11.jpg",
    "/pics/pic3.jpg",
    "/pics/pic2.jpg",
    "/pics/pic4.jpg",
    "/pics/pic8.jpg",
    "/pics/pic7.jpg",
    "/pics/pic10.jpg",
    "/pics/pic13.jpg",
  ];

  const openModal = (index) => {
    setSelectedIndex(index);
    setIsLoading(true); // Start loading when modal opens
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showNextImage = () => {
    setIsTransitioning(true);
    setIsLoading(true); // Start loading when switching images
    setTimeout(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

  const showPreviousImage = () => {
    setIsTransitioning(true);
    setIsLoading(true); // Start loading when switching images
    setTimeout(() => {
      setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="mt-40">
      <div className="mx-auto w-1/3 my-20">
        <div className="w-5/6 mx-auto flex gap-4 mb-5">
          <div className="h-[.5rem] w-[1rem] bg-[#FE6F00] rounded-md"></div>
          <div className="h-[.5rem] w-[5rem] bg-[#2a9df4] rounded-md"></div>
          <div className="h-[.5rem] w-[10rem] bg-[#010f4344] rounded-md"></div>
        </div>
        <h1 className="text-5xl w-5/6 mb-20 mx-auto">Our Portfolio</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-[18rem] rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openModal(index)}
          >
            <Image src={src} layout="fill" objectFit="cover" alt={`Image ${index + 1}`} quality={100} />
          </div>
        ))}
      </div>

      {/* Popup Modal using Material Tailwind Dialog */}
      <Dialog open={isOpen} handler={closeModal} size="xl" className="bg-white p-4 rounded-lg relative">
        <DialogBody className="flex items-center justify-center relative">
          {/* Show loading spinner while the image is loading */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
              <FiLoader className="animate-spin text-4xl text-blue-500" />
            </div>
          )}
          <div
            className={`transition-opacity duration-300 h-[80vh] w-3/4 mx-auto ${isTransitioning ? "opacity-0" : "opacity-100"
              } transform ${isTransitioning ? "translate-x-10" : "translate-x-0"}`}
          >
            <Image
              src={images[selectedIndex]}
              key={selectedIndex}
              layout="fill"
              objectFit="contain"
              alt="Selected"
              quality={100}
              onLoad={() => setIsLoading(false)} // Stop loading when image is loaded
            />
          </div>
        </DialogBody>

        <div className="absolute inset-0 items-center w-[100%] flex justify-between left-0 right-0 px-10">
          <div onClick={showPreviousImage} className="px-4 py-4 bg-gray-500 text-white rounded-full hover:bg-gray-700 cursor-pointer">
            <FaChevronLeft />
          </div>
          <div onClick={showNextImage} className="px-4 py-4 bg-gray-500 text-white rounded-full hover:bg-gray-700 cursor-pointer">
            <FaChevronRight />
          </div>
        </div>

        <div onClick={closeModal} className=" text-gray-500 hover:text-blue-700 text-3xl absolute top-4 right-4 cursor-pointer">
          <IoMdClose />
        </div>
      </Dialog>
    </div>
  );
}
