'use client'

import { FaRegDotCircle } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";
import FeaturedImageGallery from './_component/pictures'
import { FaArrowRightLong } from "react-icons/fa6";

export default function SwitchPage() {
    return (
        <div className="py-40 w-5/6 mx-auto">
            {/* Decorative Header */}
            <div className="flex gap-4 mb-5">
                <div className="h-[.5rem] w-[1rem] bg-[#FE6F00] rounded-md"></div>
                <div className="h-[.5rem] w-[5rem] bg-[#2a9df4] rounded-md"></div>
                <div className="h-[.5rem] w-[10rem] bg-[#010f4344] rounded-md"></div>
            </div>
            
            {/* Page Title */}
            <h1 className="text-5xl mb-20 font-bold text-center">Key Features of Our Automatic Change-Over Switch</h1>
            
            {/* Main Content Section */}
            <div className="flex justify-between gap-20">
                {/* Left Image Section */}
                <div className="w-2/5 rounded-2xl">
                    <div className="h-[90vh] overflow-hidden relative rounded-xl">
                        <Image src="/switch.jpg" layout="fill" objectFit="cover" alt="Automatic Change-Over Switch" quality={100} />
                    </div>
                </div>
                
                {/* Right Text Section */}
                <div className="w-3/5">
                    <div className="mb-10">
                        <p className="bg-[#fe6e0020] text-[#FE6F00] rounded-xl border border-[#FE6F00] inline-block px-4 uppercase mb-16">
                            Stay Connected with Seamless Power Transitions
                        </p>
                        <h1 className="text-5xl font-extrabold text-[#414141] mb-2">RLACS</h1>
                        <h2 className="text-[#FE6F00] font-bold mb-4">Right Lamp Automatic Changeover Switch</h2>
                        <p>Experience uninterrupted power with our automatic change-over switch. This intelligent solution ensures seamless transitions between grid and solar energy, providing peace of mind in areas with unreliable power supply.</p>
                        <p className="mt-6">Designed with cutting-edge technology, RLACS allows you to enjoy stable, cost-effective energy. Whether for your home or business, our switch empowers you to focus on what matters most.</p>
                    </div>
                    
                    {/* Key Features */}
                    <h1 className="bg-[#ffffff] rounded-2xl shadow-xl border px-6 py-1 inline-block mb-6">Key Features:</h1>
                    <ul>
                        <li className="flex items-center gap-2 mb-2"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" /> Fast and Seamless Transitions</li>
                        <li className="flex items-center gap-2 mb-2"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" /> Easy Installation and Maintenance</li>
                        <li className="flex items-center gap-2 mb-2"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" /> Compatible with Any Solar Setup</li>
                        <li className="flex items-center gap-2 mb-2"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" /> Low Energy Consumption</li>
                        <li className="flex items-center gap-2 mb-2"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" /> Remote Monitoring and Control</li>
                        <li className="flex items-center gap-2 mb-10"><FaRegDotCircle className="drop-shadow-md text-[#2a9df4]" /> Built-in Safety Mechanisms</li>
                    </ul>

                    <Link href="#" className="text-[#FE6F00] font-bold flex items-center gap-2 hover:gap-4 hover:font-extrabold transition duration-300">
                        Learn More <FaArrowRightLong />
                    </Link>
                </div>
            </div>

            {/* Image Gallery */}
            <div className="mt-40 w-5/6 mx-auto">
                <FeaturedImageGallery />
            </div>
            
            {/* Testimonials Section */}
            <div className="bg-[#f9fafb] p-16 mt-20 rounded-2xl text-center shadow-xl">
                <h2 className="text-4xl font-bold text-[#414141] mb-4">What Our Clients Say</h2>
                <div className="flex justify-around mt-10">
                    <div className="max-w-xs text-left">
                        <p className="text-lg font-semibold mb-2">"Reliable, easy to use, and has been a lifesaver during power outages. Highly recommend!"</p>
                        <span className="text-[#555]">– Alex M., Business Owner</span>
                    </div>
                    <div className="max-w-xs text-left">
                        <p className="text-lg font-semibold mb-2">"Installed it last year, and I’m saving a lot on energy costs. A smart investment!"</p>
                        <span className="text-[#555]">– Sarah T., Homeowner</span>
                    </div>
                    <div className="max-w-xs text-left">
                        <p className="text-lg font-semibold mb-2">"Our operations no longer face interruptions. RLACS is the future of power management."</p>
                        <span className="text-[#555]">– John D., Facility Manager</span>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-20 w-5/6 mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="font-bold text-lg">1. How does the automatic change-over switch work?</h3>
                        <p>Our switch detects power outages and instantly transfers the load to a solar energy system, ensuring constant power without manual intervention.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">2. Is it compatible with any solar setup?</h3>
                        <p>Yes, RLACS is designed to integrate smoothly with any existing solar setup, providing you with maximum flexibility.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">3. How long does installation take?</h3>
                        <p>Installation is straightforward and can be completed within a few hours, depending on your setup.</p>
                    </div>
                </div>
            </div>
            
            {/* Final CTA */}
            <div className="bg-[#2a9df4] text-white p-16 mt-20 rounded-2xl text-center shadow-xl">
                <h2 className="text-4xl font-bold mb-4">Ready to Experience Uninterrupted Power?</h2>
                <p className="text-lg mb-8">Get in touch to learn how our automatic change-over switch can bring stability and reliability to your power setup. Our team is here to answer questions and guide you through every step.</p>
                <Link href="/contact" className="bg-[#FE6F00] text-white py-3 px-8 rounded-full font-bold shadow-lg hover:bg-[#e66500] transition duration-300">Contact Us Today</Link>
            </div>
        </div>
    )
}
