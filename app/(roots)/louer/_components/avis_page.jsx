'use client'

import Image from "next/image";


export default function AvisPage() {
    return (
        <div className="lg:py-40 py-20">
            <div className="flex lg:w-5/6 mx-auto">
                <div className="md:flex mx-auto gap-20 rounded-xl p-6">
                    <div className="h-[40vh] lg:h-[50vh] md:w-3/6 overflow-hidden relative rounded-xl">
                        <Image src="/impression.jpeg" layout="fill" objectFit="cover" alt="bay" quality={100} />
                    </div>

                    <div className="md:w-3/6 ">
                        <h1 className="text-4xl lg:text-6xl mb-10 text-[#ad8954] font-extrabold">Votre avis nous est précieux</h1>
                        <p className="font-bold text-2xl lg:text-3xl">&#39;&#39;Suivi clair et précis, équipe très professionnelle qui vous aide,
                            très patients. Premier logement pour mon cas et l&lsquo;expérience était parfaite ! &#39;&#39;</p>
                    </div>
                </div>
            </div>
        </div>
    );
}