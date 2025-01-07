'use client';

import Image from "next/image";
import Link from "next/link";
import { FaRegDotCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import MasonryGridGallery from "./gallery";

const images = ["/logos/isuzu.png", "/logos/reg.png", "/logos/ur.jpg", "/logos/grid.png"]

export default function SwitchComponent() {
    return (
        <div className="pt-40 w-5/6 mx-auto">
            <div className="w-5/6 mx-auto flex gap-4 mb-5">
                <div className="h-[.5rem] w-[1rem] bg-[#FE6F00] rounded-md"></div>
                <div className="h-[.5rem] w-[5rem] bg-[#2a9df4] rounded-md"></div>
                <div className="h-[.5rem] w-[10rem] bg-[#010f4344] rounded-md"></div>
            </div>

            <h1 className="text-5xl mb-20 w-5/6 mx-auto">Key Features of Our Automatic Change-Over Switch</h1>
            <div className="flex justify-between gap-20">
                <div className="w-1/3 mt-20">
                    <h1 className="text-2xl text-[#bbb] mb-6">Stay Connected with Seamless Power Transitions</h1>
                    <p>
                        Imagine never having to worry about unexpected power outages again. Our advanced automatic
                        change-over switch guarantees uninterrupted power by seamlessly transitioning from grid power
                        to solar energy. It&apos;s designed to make life easier, offering convenience, reliability, and
                        peace of mind—especially in regions prone to power cuts.
                    </p>
                    <p className="mt-4">
                        Discover a smart, dependable solution that not only reduces the hassle of manual switching
                        but also helps you maintain control over energy costs and sustainability.
                    </p>
                </div>

                <div className="w-1/3 p-4 pt-20 bg-[#ffffff] rounded-2xl shadow-2xl border">
                    <h1 className="text-5xl font-extrabold text-[#414141] mb-2">RLACS</h1>
                    <h2 className="text-[#FE6F00] font-bold mb-4">Right Lamp Automatic Changeover Switch</h2>
                    <div className="h-[50vh] overflow-hidden relative rounded-xl">
                        <Image src="/switch.jpg" layout="fill" objectFit="cover" alt="Product Image" quality={100} />
                    </div>
                </div>

                <div className="w-1/3">
                    <h1 className="bg-[#ffffff] rounded-2xl shadow-xl border px-6 py-1 inline-block mb-6">Key Features:</h1>
                    <p className="flex items-center gap-2 mb-2"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" /> Fast and Seamless Transitions</p>
                    <p className="flex items-center gap-2 mb-2"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" /> Easy Installation and Maintenance</p>
                    <p className="flex items-center gap-2 mb-2"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" /> Compatible with Any Solar Setup</p>
                    <p className="flex items-center gap-2 mb-10"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" /> Designed for Safety</p>
                    <Link href="/switch" className="text-[#FE6F00] font-bold flex items-center gap-2 hover:gap-4 hover:font-extrabold transition duration-300">Contact Us <FaArrowRightLong /></Link>
                </div>
            </div>

            <MasonryGridGallery />

            <div className="mt-40">
                <div className="my-40 mx-auto">
                    <div className="text-4xl mb-6 bg-[#f9f9f9] shadow-sm rounded-xl  px-10 py-6">
                        <div className="w-5/6 flex gap-4 mb-5">
                            <div className="h-[.5rem] w-[1rem] bg-[#FE6F00] rounded-md"></div>
                            <div className="h-[.5rem] w-[5rem] bg-[#2a9df4] rounded-md"></div>
                            <div className="h-[.5rem] w-[10rem] bg-[#adadad3e] rounded-md"></div>
                        </div>
                        <h1 className="text-[#898989] font-semibold">What Our Customers Say</h1>
                    </div>
                    <div className="flex justify-center gap-6">
                        <div className="w-1/2 bg-[#fe6e0020] rounded-xl shadow-sm p-8">
                            <p className="italic text-lg mb-10">&rdquo;Switching to solar energy was the best decision I&apos;ve made. It reduced my monthly bills and I feel proud to be contributing to a cleaner planet. The transition to solar was smooth, and we&apos;re already seeing a significant decrease in energy costs. It&apos;s great to know we&apos;re doing something good for the environment.&rdquo;</p>
                            <div className="flex gap-4 items-center">
                                <div className="h-10 w-10 rounded-full relative overflow-hidden">
                                    <Image src="/switch.jpg" layout="fill" objectFit="cover" alt="Product Image" quality={100} />
                                </div>
                                <p className="font-semibold">- John Doe</p>
                            </div>
                        </div>
                        <div className="w-1/2 bg-[#f9f9f9] rounded-xl shadow-sm p-8">
                            <p className="italic text-lg mb-10">&rdquo;The installation was quick, and the savings have been substantial. I&apos;m now energy-independent and love the peace of mind that comes with it. The team was professional and knowledgeable throughout the entire process. Solar has truly changed my energy consumption and I couldn&apos;t be happier.&rdquo;</p>
                            <div className="flex gap-4 items-center">
                                <div className="h-10 w-10 rounded-full relative overflow-hidden">
                                    <Image src="/switch.jpg" layout="fill" objectFit="cover" alt="Product Image" quality={100} />
                                </div>
                                <p className="font-semibold">- Jane Smith</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="mx-auto w-2/3 text-center mt-20 mb-40">
                    <h1 className="text-5xl w-5/6 mb-10 mx-auto">Our Trusted Partners</h1>
                    <p className="text-lg mb-10 w-3/4 mx-auto">We work with leading organizations dedicated to advancing sustainable energy solutions and providing the best technology to our clients.</p>
                </div>

                <div className="slider" reverse="true" style={{
                    "--width": "300px",
                    "--height": "150px",
                    "--quantity": 4,
                }}>
                    <div className="list">
                        {images.map((image, index) => (
                            <div key={index} className="item flex items-center" style={{ "--position": index }}><Image src={image} width={700} height={400} quality={100} alt="image" className="mx-auto rounded-lg" /></div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
