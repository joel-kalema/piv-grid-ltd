'use client'

import Image from "next/image";
import MasonryGridGallery from '@/components/_home/gallery';
import { GiTrophyCup } from "react-icons/gi";

export default function Louer() {
    return (
        <div className="pt-20 ">
            <div className="w-5/6 mx-auto mt-20 flex gap-10">
                <div className="w-4/6">
                    <div className="w-5/6 mx-auto flex gap-4 mb-5">
                        <div className="h-[.5rem] w-[1rem] bg-[#FE6F00] rounded-md"></div>
                        <div className="h-[.5rem] w-[5rem] bg-[#2a9df4] rounded-md"></div>
                        <div className="h-[.5rem] w-[10rem] bg-[#2b2b2b0d] rounded-md"></div>
                    </div>
                    <h1 className="text-7xl mb-16">Historical background</h1>
                    <p className="mb-10">Right Lamp Shine Group (RLSG Ltd) is founded by Mr JM Julien
                        Dushimimana in 2020, for the purpose of electrical generation,
                        transmission, and installation. We help people to design modern
                        house electrical lighting by using modern electrical saving lamps.
                        We participate also in energy researches.</p>

                    <p className="mb-4">Right Lamp Shine Group (RLSG Ltd) is made up with both students in
                        masters of renewable energy and young people graduated from University
                        of Rwanda, College of Science and Technology (CST), Department of Physics
                        in Renewable Energy Option.</p>
                    <p className="mb-4">The purpose of RLSG Ltd is to contribute in promoting clean energy in Rwanda
                        by teaching Rwandans on how important is to use clean energy in cooking and
                        lighting as well as to construct or to install clean energy systems and to
                        teach people on the management of their clean energy systems in other to optimize their productivity.</p>
                    <p className="mb-4"> Right Lamp Shine Group (RLSG Ltd) was started in June 2020. After finding
                        the environmental problems associated with the use of non-clean energy
                        and the way many people are not aware of using clean energy during cooking
                        and lighting process, RLSG Ltd members came up with the idea to give their
                        contribution in the promotion of clean energy in order to save our environment
                        and to increase the quality of life style of Rwandans.</p>
                </div>
                <div className="hidden lg:block h-[40rem] overflow-hidden w-2/6 relative rounded-xl">
                    <Image src="/about.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                </div>
            </div>
            <div className="my-20">
                <div className="w-[5rem] h-[5rem] border mx-auto rounded-[50%] flex justify-center items-center shadow-md bg-[#fff] relative z-20 ">
                    <GiTrophyCup className=" drop-shadow-lg text-4xl" />
                </div>
                <p className="italic text-xl text-center w-1/2 mx-auto border-t pt-6 -mt-4 ">We&apos;re a trusted local Electrical Company. We &apos;ve been serving a variety of commercial,residential,and industrial customers since 2010.</p>
            </div>

            <div className="flex w-3/4 mx-auto gap-10 my-28">
                <div className="bg-[#fe6e0020] rounded-2xl shadow-md hover:shadow-2xl hover:bg-[#FE6F00] hover:text-[#fff] border p-6 transition duration-300">
                    <p className="bg-[#ffffff5f] shadow-md py-2 px-6 rounded-lg inline-block font-extrabold text-2xl mb-2">1</p>
                    <h1 className="text-2xl font-extrabold my-2">We Love What We Do</h1>
                    <p className="text-sm">Our builders come to work smiling and ready to build your dream. They have a passion for remodeling and are qualified to work on your design.</p>
                </div>

                <div className="bg-[#fe6e0020] rounded-2xl shadow-md hover:shadow-2xl hover:bg-[#FE6F00] hover:text-[#fff] border p-6 transition duration-300">
                    <p className="bg-[#ffffff5f] shadow-md py-2 px-6 rounded-lg inline-block font-extrabold text-2xl mb-2">2</p>
                    <h1 className="text-2xl font-extrabold my-2">We Truly Care</h1>
                    <p className="text-sm">The right care can ensure the success of any remodeling effort. We believe in partnership & trust and work with you to create a great space.</p>
                </div>

                <div className="bg-[#fe6e0020] rounded-2xl shadow-md hover:shadow-2xl hover:bg-[#FE6F00] hover:text-[#fff] border p-6 transition duration-300">
                    <p className="bg-[#ffffff5f] shadow-md py-2 px-6 rounded-lg inline-block font-extrabold text-2xl mb-2">3</p>
                    <h1 className="text-2xl font-extrabold my-2">Our Promise to You</h1>
                    <p className="text-sm">We promise to always provide value and outstanding service, regardless of your lifestyle need, design preference, or budget constraint.</p>
                </div>
            </div>

            <div className='w-[100%] lg:w-[60%] mx-auto h-[70vh] bg-[#c0c0c0] rounded-2xl overflow-hidden'>
                <iframe className='w-[100%] h-[100%]' src="https://www.youtube.com/embed/qeHPKLHzG-0?si=OiqN1kMHAY_h9P6w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="w-5/6 mx-auto my-40">
                <MasonryGridGallery />
            </div>
        </div>
    );
}