'use client'

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export default function Homepage() {
  return (
    <div className="pt-40 flex w-5/6 mx-auto justify-between">
      <div className="w-2/4">
        <p className="bg-[#2a9cf41b] text-[#2a9df4] rounded-xl border border-[#2a9df4] inline-block px-4 uppercase mb-16">Utility prices have steadily increased</p>
        <h1 className="text-7xl">Power Your Future with Solar Energy  &</h1>
        <h1 className="text-7xl mb-16">Seamless Grid Transitions.</h1>
        <p className="w-4/5 mb-10">Effortlessly switch between grid power and solar energy with our advanced automatic change-over switch.</p>
        <div className="flex gap-4 mb-5">
          <div className="h-[.5rem] w-[1rem] bg-[#FE6F00] rounded-md"></div>
          <div className="h-[.5rem] w-[5rem] bg-[#2a9df4] rounded-md"></div>
        </div>
      </div>
      <div className="w-2/5 h-[80vh] relative flex">
        <Carousel
          className="rounded-xl w-[100%]"
          transition={{ duration: 1 }}
          autoplay={true}
          autoplayDelay={3000}
          loop={true}
          prevArrow={false}
          nextArrow={false}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="h-full w-full">
            <Image src="/solar4.jpg" layout="fill" objectFit="cover" alt="joel" quality={90} />
          </div>
          <div className="h-full w-full">
            <Image src="/joel.jpg" layout="fill" objectFit="cover" alt="joel" quality={90} />
          </div>
          <div className="h-full w-full">
            <Image src="/julien.jpg" layout="fill" objectFit="cover" alt="bay" quality={90} />
          </div>
          <div className="h-full w-full">
            <Image src="/solar4.jpg" layout="fill" objectFit="cover" alt="julien" quality={90} />
          </div>
        </Carousel>
        <div className="absolute h-[40vh] w-3/6 -bottom-28 -left-28 p-4 bg-[#fff] rounded-3xl overflow-hidden">
          <div className="h-full overflow-hidden bg-[#fff] relative rounded-2xl shadow-sm">
            <Image src="/switch.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
          </div>
        </div>
      </div>
    </div>
  );
}