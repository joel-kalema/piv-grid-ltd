import React from "react";
import Image from "next/image";


export default function FeaturedImageGallery() {
  const data = [
    {
      imgelink: "/switch/switch1.jpg"
    },
    {
      imgelink: "/switch/switch2.jpg"
    },
    {
      imgelink: "/switch/switch3.jpeg"
    },
    {
      imgelink: "/switch/switch4.jpeg"
    },
    {
      imgelink: "/switch/switch5.jpeg"
    },
    {
      imgelink: "/switch/switch6.jpg"
    },
    {
      imgelink: "/switch/switch7.jpeg"
    },
  ];

  const [active, setActive] = React.useState("/switch/switch1.jpg");

  return (
    <div className="w-5/6 mx-auto">
      <h1></h1>
      <div className="h-[65vh] overflow-hidden relative w-full max-w-full rounded-3xl object-cover object-center mb-10 bg-[#c7c7c7]">
        <Image
          src={active}
          layout="fill"
          className="relative z-20"
          objectFit="contain"
          alt="Selected"
          quality={100}
        />

        <Image
          src={active}
          className="absolute top-0 z-10 blur-[10rem]"
          layout="fill"
          objectFit="cover"
          alt="Selected"
          quality={40}
        />

      </div>
      <div className="flex gap-4 justify-center">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}