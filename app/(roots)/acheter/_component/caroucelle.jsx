'use client'

import { Carousel } from "@material-tailwind/react";
 
export default function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      transition={{ duration: 1 }}
        autoplay={true}
        autoplayDelay={2000}
        loop={true}
        prevArrow={false}
        nextArrow={false}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://img.batiweb.com/repo-images/article/43524/IMMOBILIER.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://immokap.fr/wp-content/uploads/achat-bien-immobilier-deja-loue.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.proprietes-privees.com/_ipx/w_1536&f_jpeg/https://images.proprietes-privees.com/annonce/365942PCS/PROPRIETES-PRIVEES-365942PCS-1.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}