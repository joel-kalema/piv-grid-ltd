'use client'

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { AiOutlineLogin } from "react-icons/ai";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <div className="lg:rounded-[2rem] relative z-20">
            <footer className="relative w-full bg-[#161616] text-[#d0d0d0]">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="lg:flex justify-between items-center gap-4 pb-10 pt-20">
                        <div className="2/4  mb-12 lg:mb-0">
                            <div className="p-4 w-48 h-48 flex justify-center items-center mb-6 bg-white rounded-full">
                                <Image src='/logo.png' height={60} width={100} alt="Eleka logo" className='md:w-14 lg:w-40 mb-4' />
                            </div>
                            <p className="text-sm w-3/4 mb-6 ">Power Your Life with Clean Energy – Discover the Benefits of Solar Today!</p>

                        </div>

                        <div className="flex lg:w-2/4 justify-between gap-4">
                            <div className="w-full">
                                <p className="lg:text-sm mb-3 flex items-center gap-2"><MdLocationOn className="text-[#2a9df4] text-2xl" />KIGALI :Gitega,KN 104</p>
                                <p className="lg:text-sm mb-3 flex items-center gap-2"><FaPhone className="text-[#2a9df4] text-xl" />+250 783008373</p>
                                <Link href="mailto:rlsgltd22@gmail.com" className="lg:text-sm mb-10 flex items-center gap-2"><IoMdMail className="text-[#2a9df4] text-xl" />rlsgltd22@gmail.com</Link>
                                <div className=" flex border border-[#d0d0d04d] py-2 pl-4 pr-2 rounded-full text-[#656565] bg-white w-4/6">
                                    <div className="w-4/6 py-1">Write your email here</div>
                                    <div className="w-2/6 bg-[#FE6F00] text-white rounded-full py-1 px-2 flex justify-between items-center">
                                        Soumettre <AiOutlineLogin />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex w-full flex-col items-center justify-center border-t border-[#6c6c6c] py-4 md:flex-row md:justify-between">
                        <Typography
                            variant="small"
                            className="mb-4 text-center font-normal text-[#a4a4a4] md:mb-0"
                        >
                            &copy; {currentYear} Qavah Group. All
                            Rights Reserved.
                        </Typography>
                        <div className="flex gap-4 text-[#a4a4a4] sm:justify-center my-6">
                            <Typography as="a" href="https://m.facebook.com/p/QAVAH-GROUP-61553356806323/" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fill-rule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </Typography>
                            <Typography as="a" href="https://www.instagram.com/qavah_group?igsh=MXJmNWl5MTd3MWp5cA==" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </Typography>
                            <Typography as="a" href="https://cd.linkedin.com/company/kowach-corporation" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                                <FaLinkedinIn className="h-5 w-5" />
                            </Typography>
                            <Typography as="a" href="https://www.tiktok.com/@qavah.group" target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                                <FaTiktok className="h-5 w-5" />
                            </Typography>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}