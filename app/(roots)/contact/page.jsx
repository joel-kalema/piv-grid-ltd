'use client'
import React from 'react';
import {
    Input,
    Button
} from "@material-tailwind/react";
import { Dialog } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import Image from "next/image";
import { BsPatchCheckFill } from "react-icons/bs";
import Link from 'next/link';
import { IoLocation, IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
    const [open, setOpen] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);

        fetch(
            // "https://script.google.com/macros/s/AKfycbwocoEevtbSNxucgewqbT93I2u4DlFeeoDKDVffAdq89bqAbpBRzRtQ2pnsvQn0b8B3lQ/exec",
            {
                method: "POST",
                body: formDatab
            }
        ).then(res => {
            setOpen(true)
            console.log("this is the respose", res)
            // setName("");
            // setEmail("");


        })
            .catch((error) => {
                console.log(error);

            });
    }
    const handleOpen = () => setOpen(!open);

    return (
        <div className="bg-[#ffffff]">
            <div className="py-40 w-5/6 mx-auto">
                <div className="flex gap-10 mx-auto bg-[#fff] p-4 rounded-3xl shadow-md">
                    <div className="w-3/5 min-h-[60dvh] bg-[#e3eaee] relative overflow-hidden rounded-xl p-10 flex flex-col justify-between">
                        <div>
                            <div className="w-5/6 flex gap-4 mb-5">
                                <div className="h-[.5rem] w-[1rem] bg-[#FE6F00] rounded-md"></div>
                                <div className="h-[.5rem] w-[5rem] bg-[#2a9df4] rounded-md"></div>
                                <div className="h-[.5rem] w-[10rem] bg-[#adadad3e] rounded-md"></div>
                            </div>
                            <h1 className="text-2xl mb-6 mx-auto">Ask informations with PV-GRID POWER SYSTEM Ltd</h1>
                        </div>
                        <div className='flex gap-10 '>
                            <div className='rounded-md w-1/3 flex items-center gap-2 font-bold'>
                                <IoLocation className='text-[#FE6F00] text-2xl mb-2' />
                                <p>Gitega,KN 104</p>
                            </div>
                            <div className='rounded-md w-1/3 flex items-center gap-2 font-bold'>
                                <IoMdMail className='text-[#FE6F00] text-2xl mb-2' />
                                <p>rlsgltd22@gmail.com</p>
                            </div>
                            <div className='rounded-md w-1/3 flex items-center gap-2 font-bold'>
                                <IoCall className='text-[#FE6F00] text-2xl mb-2' />
                                <p>+250 783008373</p>
                            </div>
                        </div>
                        <div className=" min-h-[20dvh] relative overflow-hidden rounded-2xl p-10">
                            <Image src="/solar3.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                        </div>
                    </div>

                    <form className="mt-8 mb-2 w-2/5 max-w-screen-lg bg-whitep-4 " onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-1 flex flex-col gap-6">
                            <Input variant="outlined" label="Prénom" placeholder="Prénom" type="text" name="Prenom" />
                            <Input variant="outlined" label="Nom" placeholder="Nom" type="text" name="Nom" />
                            <Input variant="outlined" label="E-mail" placeholder="E-mail" type="mail" name="Email" />
                            <Input variant="outlined" label="+250 xxx xxx xxx" placeholder="Téléphone" type="number" name="Numero" />
                            <Textarea label="Message" name="Message" />
                        </div>

                        <Button className="mt-6 bg-[#2a9df4]" fullWidth type='submit'>
                            Contacter
                        </Button>
                    </form>
                </div>
            </div>

            <Dialog open={open} handler={handleOpen} className='relative p-6 text-center'>
                <div className="shadow-design shadow02 w-20 h-20 -mt-16 rounded-[50%] mx-auto flex justify-center items-center bg-[#fff]">
                    <BsPatchCheckFill className="drop-shadow-lg text-[#ad8954] text-5xl" />
                </div>
                <h1 className='text-[#202020] font-extrabold text-2xl mt-6 mb-4'>Merci d&apos;avoir soumis votre demande auprès de Qavah Group.</h1>
                <p className='mb-10'>Nous avons bien reçu votre demande concernant nos services immobiliers
                    et sommes ravis de pouvoir vous accompagner dans la recherche de la
                    solution idéale correspondant à vos besoins.
                </p>
                <Link href="/" className='bg-[#ad8954] text-white px-6 py-2 rounded-md hover:shadow-xl' onClick={handleOpen}>
                    Fermer
                </Link>
            </Dialog>
        </div>
    )
}

export default Contact;