'use client'

import Image from "next/image";
import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Why = [
    {
        title: 'Save on Energy Costs',
        detail: 'With rising electricity prices, switching to solar can significantly reduce your energy bills. Solar energy allows you to generate your own power, cutting down your reliance on expensive grid electricity. Our systems are designed for efficiency, providing you with the best return on investment in the long run.'
    },
    {
        title: 'Eco-Friendly & Sustainable',
        detail: "Every kilowatt of solar energy generated helps reduce greenhouse gas emissions and contributes to a healthier planet. By installing a solar energy system, you're taking a step toward reducing your carbon footprint and supporting the global shift to renewable energy."
    },
    {
        title: 'Increased Property Value',
        detail: 'Investing in solar energy not only saves you money but also increases the value of your property. Solar-powered homes are in demand, and potential buyers are more willing to pay a premium for homes that come equipped with energy-saving features.'
    },
    {
        title: 'Energy Independence',
        detail: 'Tired of unpredictable grid outages? Solar energy gives you the freedom to generate your own power, ensuring you always have electricity, even in remote areas or during grid failures. Pairing your solar system with our automatic change-over switch guarantees continuous power, rain or shine.'
    }
]

export default function Presentation() {
    return (
        <div className="pt-20">
            <div className="p-4 lg:p-40">
                <div className="flex flex-col lg:flex-row gap-10 mb-10">
                    <h1 className="text-3xl lg:text-5xl w-full lg:w-3/6">Our Proven Amazing Professional Expertise</h1>
                    <p className="w-full lg:w-3/6">We are dedicated to providing high-quality solar energy solutions that
                        are easy to install, maintain, and use. From helping you choose the best solar system for your needs
                        to providing ongoing support, we are with you every step of the way. Our team of energy experts is
                        always on hand to answer questions and provide guidance, ensuring your transition to solar power is seamless and stress-free.</p>
                </div>
            </div>

            <div className="bg-[#0b2035] text-[#fff] pt-28 pb-14 rounded-[4rem]">
                <div className="w-5/6 mx-auto flex gap-4 mb-5">
                    <div className="h-[.5rem] w-[1rem] bg-[#FE6F00] rounded-md"></div>
                    <div className="h-[.5rem] w-[5rem] bg-[#2a9df4] rounded-md"></div>
                    <div className="h-[.5rem] w-[10rem] bg-[#ffffff0d] rounded-md"></div>
                </div>
                <h1 className="text-5xl mb-20 w-5/6 mx-auto">Why Choose Solar Energy?</h1>
                <div className="w-5/6 mx-auto gap-10 flex flex-wrap justify-between mb-40">
                    {Why.map((item, index) => (
                        <div key={index} className="w-[48%] bg-[#ffffff0d] p-4 rounded-3xl">
                            <div className="bg-[#ffffff07] p-10 rounded-2xl h-full shadow-lg">
                                <h1 className="text-xl font-bold mb-4">{item.title}</h1>
                                <p className="text-[#ffffffc6]">{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#f8f8f8] p-20 mx-10 rounded-[3rem] text-[#212121]">
                    <div className="flex pb-10 border-b border-[#c2c2c2]">
                        <div className="w-2/4">
                            <p className="text-[#FE6F00] font-extrabold">About</p>
                            <h1 className="text-4xl font-extrabold mb-4">PV-GRID POWER SYSTEM Ltd</h1>
                            <p className="w-5/6 bg-[#2a9cf41b] text-[#2a9df4] rounded-xl border border-[#2a9df4] inline-block px-4">We can take your electrical and lighting ideas from concept to reality.</p>
                        </div>
                        <div className="w-2/4">
                            <h2 className="mb-6">We&apos;re a trusted local Electrical Company. We&apos;ve been serving a variety of commercial, residential,and industrial customers since 2010.</h2>
                            <p className="flex gap-2 mb-2 items-center"><IoIosCheckmarkCircle className="text-[#FE6F00]" />We Love What We Do</p>
                            <p className="flex gap-2 mb-2 items-center"><IoIosCheckmarkCircle className="text-[#FE6F00]" />We Truly Care</p>
                            <p className="flex gap-2 mb-2 items-center"><IoIosCheckmarkCircle className="text-[#FE6F00]" />Our Promise to You</p>
                        </div>
                    </div>

                    <div className="flex gap-12 mx-auto mt-20 justify-between">
                        <div className="w-4/6 bg-[#fff] p-6 rounded-xl">
                            <h1 className="font-extrabold text-xl my-4">Expert Instalation</h1>
                            <p className="mb-4 text-[#999999] text-sm w-3/4">Benefit from our team&apos;s wealth of strategic expertise. We Craft strategies that align with your
                                businnes objectves.
                            </p>
                            <div className="flex gap-5">
                                <div className="h-[40vh] lg:w-4/6 overflow-hidden relative rounded-xl">
                                    <Image src="/what.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                                </div>
                                <div className="h-[40vh] lg:w-4/6 overflow-hidden relative rounded-xl">
                                    <Image src="/joel.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-2/6 lg:p-6">
                            <p className="text-6xl font-bold text-[#999999] mb-20">Our Solutions Reach 100% Renewable</p>
                            <Link href="/contact" className="bg-[#FE6F00] text-white py-3 px-8 rounded-full font-bold shadow-lg hover:bg-[#e66500] transition duration-300">Contact Us Today</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}