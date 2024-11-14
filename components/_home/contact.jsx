'use client'

import Image from "next/image";
import Link from "next/link";

export default function Contacts() {
    return (
        <div className="py-28 relative h-[100vh] flex justify-center items-center">
            <Image src="/bgsolar2.png" layout="fill" objectFit="cover" alt="bay" quality={100} className="relative z-10"/>
            <div className="relative z-20 w-4/6 mx-auto">
                <div className="mb-6 lg:mb-0 text-center">
                    <h1 className="text-4xl lg:text-6xl mb-4">Ready to Embarce a Greener Future? Explore Our Solar Solutions Now!</h1>
                </div>
                <Link href="/contact" className="w-[4rem] lg:w-[7rem] py-2 border border-[#2a9df4] mx-auto rounded-xl flex justify-center bg-[#2a9df4] items-center hover:bg-[#2a9cf469] text-[#fff] font-bold transition duration-300">
                    Contact Us
                </Link>
            </div>
        </div>
    );
}