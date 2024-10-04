'use client'

import Image from "next/image";
import Link from "next/link";
import { FaRegDotCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Switch() {
    return (
        <div className="py-40 w-5/6 mx-auto">
            <div className="w-5/6 mx-auto flex gap-4 mb-5">
                <div className="h-[.5rem] w-[1rem] bg-[#FE6F00] rounded-md"></div>
                <div className="h-[.5rem] w-[5rem] bg-[#2a9df4] rounded-md"></div>
                <div className="h-[.5rem] w-[10rem] bg-[#010f4344] rounded-md"></div>
            </div>
            <h1 className="text-5xl mb-20 w-5/6 mx-auto">Key Features of Our Automatic Change-Over Switch</h1>
            <div className="flex justify-between gap-20">
                <div className="w-1/3 mt-20">
                    <h1 className="text-3xl text-[#bbb] mb-6">Stay Connected with Seamless Power Transitions</h1>
                    {/* <p>The Automatic Changeover Switch is a tool that links
                        renewable energy sources to the main power grid for
                        housesholds. It uses IOT technology, Which lets people
                        control the system from a distance and change the cost
                        of the electricity they use.
                    </p> */}
                    <p>Our automatic change-over switch ensures that you never experience an interruption in power.
                        When grid power fails, the switch automatically transfers the load to your solar energy system
                        and vice versa. This intelligent solution offers peace of mind, particularly in areas with
                        unreliable grid power. You no longer need to manually switch between power sources; our
                        technology does the work for you.</p>
                </div>
                <div className="w-1/3 p-4 pt-20 bg-[#ffffff] rounded-2xl shadow-2xl border">
                    <h1 className="text-5xl font-extrabold text-[#414141] mb-2">RLACS</h1>
                    <h2 className="text-[#FE6F00] font-bold mb-4">Right Lamp Automatic Changeover Switch</h2>
                    <div className="h-[50vh]  overflow-hidden relative rounded-xl">
                        <Image src="/vente01.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    </div>
                </div>
                <div className="w-1/3">
                    <h1 className="bg-[#ffffff] rounded-2xl shadow-xl border px-6 py-1 inline-block mb-6">Key Features:</h1>
                    <p className="flex items-center gap-2 mb-2"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" />Fast and Seamless Transitions</p>
                    <p className="flex items-center gap-2 mb-2"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" />Easy Installation and Maintenance</p>
                    <p className="flex items-center gap-2 mb-2"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" />Compatible with Any Solar Setup</p>
                    <p className="flex items-center gap-2 mb-10"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" />Designed for Safety</p>

                    <Link href="#" className="text-[#FE6F00] font-bold flex items-center gap-2 hover:gap-4 hover:font-extrabold transition duration-300">Contact <FaArrowRightLong /></Link>
                </div>
            </div>
        </div>
    );
}