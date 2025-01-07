'use client'

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function Questions() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="mx-4 lg:mx-auto my-40 bg-[#ffffff] flex gap-20 shadow-xl px-6 lg:px-10 py-10 lg:py-12 rounded-2xl w-5/6">
      <div className="lg:w-4/6">
        <h1 className="font-extrabold text-2xl lg:text-4xl mb-10">Frequently Asked Questions</h1>
        <div>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>1. How does the automatic change-over switch work?</AccordionHeader>
            <AccordionBody className="lg:w-5/6">
            Our switch detects power outages and instantly transfers the load to a solar energy system, 
            ensuring constant power without manual intervention.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
            2. Is it compatible with any solar setup?
            </AccordionHeader>
            <AccordionBody className="lg:w-5/6">
            Yes, RLACS is designed to integrate smoothly with any existing solar setup, 
            providing you with maximum flexibility.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
            3. How long does installation take?
            </AccordionHeader>
            <AccordionBody className="lg:w-5/6">
            Installation is straightforward and can be completed within a few hours, depending on your setup.
            </AccordionBody>
          </Accordion>
        </div>
      </div>

      <div className="hidden lg:block h-[23rem] overflow-hidden w-2/6 relative rounded-xl">
        <Image src="/question.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
      </div>
    </div>
  );
}