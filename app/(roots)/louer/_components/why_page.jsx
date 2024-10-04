'use client'

import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsHouseGearFill } from "react-icons/bs";
import { SiTraefikproxy } from "react-icons/si";


export default function WhyPage() {
    return (
        <div>
            <div className="lg:mx-auto overflow-hidden relative lg:flex lg:w-4/5 mx-4 my-10 md:my-40 gap-10">
            <h1 className="text-5xl md:hidden mb-10 text-[#ad8954] font-extrabold">Biens à louer :</h1>
                <div className="flex lg:w-3/6 h-[50vh] lg:h-[70vh] pb-20">
                    <div className="overflow-hidden relative h-full w-2/4 rounded-l-3xl">
                        <Image src="/louer1.jpeg" layout="fill" objectFit="cover" alt="bay" quality={60} />
                    </div>
                    <div className="overflow-hidden relative h-full w-2/4 rounded-r-3xl mt-10">
                        <Image src="/louer2.jpeg" layout="fill" objectFit="cover" alt="bay" quality={60} />
                    </div>
                </div>

                <div className="lg:w-3/6 pt-10">
                    <h1 className="text-5xl hidden md:block mb-10 text-[#ad8954] font-extrabold">Biens à louer :</h1>
                    <p className="mb-6">Chez Qavah, nous comprenons que trouver le logement idéal est
                        une étape cruciale dans la réalisation de vos projets personnels ou professionnels.
                        C&apos;est pourquoi nous vous proposons une sélection exceptionnelle de biens à louer
                        qui répondent à tous types de besoins et de budgets. Notre portefeuille comprend
                        des appartements modernes, des maisons familiales spacieuses, et des locaux commerciaux
                        stratégiquement situés. Que vous cherchiez à vous installer dans un quartier résidentiel
                        calme ou un secteur dynamique en plein cœur de la ville, vous trouverez chez nous la propriété
                        qui correspond parfaitement à vos critères.</p>
                    <Button variant="outlined">Contactez-nous</Button>
                </div>
            </div>

            <div className=" bg-[#f3f3f3] py-20 px-4 lg:px-0">
                <div className="lg:w-5/6 mx-auto">
                    <h1 className="text-xl lg:text-3xl lg:w-3/4 text-center mx-auto mb-20 text-[#ad8954]">Nous mettons à votre disposition une interface intuitive qui vous permet de filtrer facilement les biens en fonction de vos préférences :</h1>
                    <div className="lg:flex gap-5">
                        <div className="lg:w-1/3 mb-6 lg:mb-0 shadow-md py-8 px-6 bg-[#fff] rounded-3xl">
                            <h1 className="flex gap-4 items-center text-2xl font-extrabold mb-6"><MdOutlineAttachMoney />Budget :</h1>
                            <p>Trouvez des options correspondant à votre fourchette de prix, qu&apos;il s&apos;agisse d&apos;une location abordable ou d&apos;un bien haut de gamme.</p>
                        </div>

                        <div className="lg:w-1/3 mb-6 lg:mb-0 shadow-md py-8 px-6 bg-[#fff] rounded-3xl">
                            <h1 className="flex gap-4 items-center text-2xl font-extrabold mb-6"><BsHouseGearFill />Type de bien :</h1>
                            <p>Sélectionnez des appartements, maisons, studios ou espaces commerciaux selon vos besoins.</p>
                        </div>

                        <div className="lg:w-1/3 mb-6 lg:mb-0 shadow-md py-8 px-6 bg-[#fff] rounded-3xl">
                            <h1 className="flex gap-4 items-center text-2xl font-extrabold mb-6"><SiTraefikproxy />Proximité des services :</h1>
                            <p>Recherchez des biens proches des écoles, des commerces, des centres médicaux, ou des transports publics pour plus de commodité.</p>
                        </div>
                    </div>
                </div>

                <p className="mt-28 lg:w-4/6 mx-auto lg:text-2xl text-center">Avec Qavah, la diversité de notre catalogue de biens s&apos;accompagne de la transparence totale des informations.
                    Chaque annonce est accompagnée de photos détaillées, de plans d&apos;étage, et de descriptions complètes des
                    caractéristiques, vous offrant ainsi une visibilité maximale avant même de planifier une visite.</p>
            </div>
        </div>
    );
}