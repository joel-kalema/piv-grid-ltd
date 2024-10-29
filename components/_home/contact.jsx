'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export default function Contacts() {
    return (
        <div className="lg:w-4/6 mx-auto py-28">
            <div className="mb-6 lg:mb-0 text-center">
                <h1 className="text-4xl lg:text-6xl mb-4">Ready to Embarce a Greener Future? Explore Our Solar Solutions Now!</h1>
            </div>
            <Link href="/contact" className="w-[4rem] lg:w-[7rem] py-2 border border-[#2a9df4] mx-auto rounded-xl flex justify-center items-center hover:bg-[#2a9df4] hover:text-[#fff] font-bold transition duration-300">
                Contact Us
            </Link>
        </div>
    );
}