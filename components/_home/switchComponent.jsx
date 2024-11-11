'use client';

import Image from "next/image";
import Link from "next/link";
import { FaRegDotCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import MasonryGridGallery from "./gallery";

export default function SwitchComponent() {
    return (
        <div className="py-40 w-5/6 mx-auto">
            {/* Decorative Bars */}
            <div className="w-5/6 mx-auto flex gap-4 mb-5">
                <div className="h-[.5rem] w-[1rem] bg-[#FE6F00] rounded-md"></div>
                <div className="h-[.5rem] w-[5rem] bg-[#2a9df4] rounded-md"></div>
                <div className="h-[.5rem] w-[10rem] bg-[#010f4344] rounded-md"></div>
            </div>

            {/* Key Features Section */}
            <h1 className="text-5xl mb-20 w-5/6 mx-auto">Key Features of Our Automatic Change-Over Switch</h1>
            <div className="flex justify-between gap-20">
                {/* Intro Text */}
                <div className="w-1/3 mt-20">
                    <h1 className="text-3xl text-[#bbb] mb-6">Stay Connected with Seamless Power Transitions</h1>
                    <p>
                        Imagine never having to worry about unexpected power outages again. Our advanced automatic
                        change-over switch guarantees uninterrupted power by seamlessly transitioning from grid power
                        to solar energy. It’s designed to make life easier, offering convenience, reliability, and
                        peace of mind—especially in regions prone to power cuts.
                    </p>
                    <p className="mt-4">
                        Discover a smart, dependable solution that not only reduces the hassle of manual switching
                        but also helps you maintain control over energy costs and sustainability.
                    </p>
                </div>

                {/* Product Image and Info */}
                <div className="w-1/3 p-4 pt-20 bg-[#ffffff] rounded-2xl shadow-2xl border">
                    <h1 className="text-5xl font-extrabold text-[#414141] mb-2">RLACS</h1>
                    <h2 className="text-[#FE6F00] font-bold mb-4">Right Lamp Automatic Changeover Switch</h2>
                    <div className="h-[50vh] overflow-hidden relative rounded-xl">
                        <Image src="/switch.jpg" layout="fill" objectFit="cover" alt="Product Image" quality={100} />
                    </div>
                </div>

                {/* Key Features List */}
                <div className="w-1/3">
                    <h1 className="bg-[#ffffff] rounded-2xl shadow-xl border px-6 py-1 inline-block mb-6">Key Features:</h1>
                    <p className="flex items-center gap-2 mb-2"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" /> Fast and Seamless Transitions</p>
                    <p className="flex items-center gap-2 mb-2"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" /> Easy Installation and Maintenance</p>
                    <p className="flex items-center gap-2 mb-2"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" /> Compatible with Any Solar Setup</p>
                    <p className="flex items-center gap-2 mb-10"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" /> Designed for Safety</p>
                    <Link href="#" className="text-[#FE6F00] font-bold flex items-center gap-2 hover:gap-4 hover:font-extrabold transition duration-300">Contact Us <FaArrowRightLong /></Link>
                </div>
            </div>

            {/* Portfolio Gallery */}
            <MasonryGridGallery />

            {/* Partners Section */}
            <div className="mt-40">
                {/* New Section: Customer Testimonials */}
                {/* New Section: Customer Testimonials */}
                <div className="my-20">
                    <h2 className="text-4xl font-semibold text-center mb-10">What Our Customers Say</h2>
                    <div className="flex justify-center gap-16">
                        <div className="w-1/3 bg-[#f9f9f9] rounded-xl shadow-md p-8">
                            <p className="italic text-lg">"Switching to solar energy was the best decision I've made. It reduced my monthly bills and I feel proud to be contributing to a cleaner planet."</p>
                            <p className="mt-4 text-right font-semibold">- John Doe</p>
                        </div>
                        <div className="w-1/3 bg-[#f9f9f9] rounded-xl shadow-md p-8">
                            <p className="italic text-lg">"The installation was quick, and the savings have been substantial. I’m now energy-independent and love the peace of mind that comes with it."</p>
                            <p className="mt-4 text-right font-semibold">- Jane Smith</p>
                        </div>
                        <div className="w-1/3 bg-[#f9f9f9] rounded-xl shadow-md p-8">
                            <p className="italic text-lg">"The transition to solar was smooth, and we’re already seeing a significant decrease in energy costs. It's great to know we’re doing something good for the environment."</p>
                            <p className="mt-4 text-right font-semibold">- Samuel Green</p>
                        </div>
                        <div className="w-1/3 bg-[#f9f9f9] rounded-xl shadow-md p-8">
                            <p className="italic text-lg">"I'm thrilled with the results! The solar system is efficient, reliable, and the savings are helping me reinvest in other home improvements. Highly recommended!"</p>
                            <p className="mt-4 text-right font-semibold">- Emily Davis</p>
                        </div>
                        <div className="w-1/3 bg-[#f9f9f9] rounded-xl shadow-md p-8">
                            <p className="italic text-lg">"The team was professional and knowledgeable throughout the entire process. Solar has truly changed my energy consumption and I couldn’t be happier."</p>
                            <p className="mt-4 text-right font-semibold">- Michael Lee</p>
                        </div>
                    </div>
                </div>



                <div className="mx-auto w-1/3 my-20">
                    <div className="w-5/6 mx-auto flex gap-4 mb-5">
                        <div className="h-[.5rem] w-[1rem] bg-[#FE6F00] rounded-md"></div>
                        <div className="h-[.5rem] w-[5rem] bg-[#2a9df4] rounded-md"></div>
                        <div className="h-[.5rem] w-[10rem] bg-[#010f4344] rounded-md"></div>
                    </div>
                    <h1 className="text-5xl w-5/6 mb-20 mx-auto">Our Trusted Partners</h1>
                    <p className="text-lg mb-10 text-center">We work with leading organizations dedicated to advancing sustainable energy solutions and providing the best technology to our clients.</p>
                </div>

                {/* Partner Logos */}
                <div className="flex gap-8 justify-center">
                    <div className="h-[12vh] w-1/5 relative">
                        <Image src="/logos/isuzu.png" layout="fill" objectFit="cover" alt="Isuzu Logo" quality={100} />
                    </div>
                    <div className="h-[10vh] w-1/5 relative">
                        <Image src="/logos/reg.png" layout="fill" objectFit="cover" alt="REG Logo" quality={100} />
                    </div>
                    <div className=" w-1/5 relative">
                        <Image src="/logos/ur.jpg" layout="fill" objectFit="cover" alt="UR Logo" quality={100} />
                    </div>
                    <div className=" w-1/5 relative">
                        <Image src="/logos/grid.png" layout="fill" objectFit="cover" alt="Grid Logo" quality={100} />
                    </div>
                </div>

            </div>
        </div>
    );
}