"use client"

import ButtonDefault from "@/components/buttons/ButtonDefault";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { MdOutlinePets } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { LuHandHeart } from "react-icons/lu";
import YoutubeEmbed from "@/components/YoutubeEmbed";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <section className="xl:px-32 lg:px-24 px-5 py-16 md:grid md:grid-cols-2 max-md:flex max-md:flex-col-reverse lg:gap-24 gap-16 items-center ">
          <div className="flex flex-col gap-3 justify-center">
            <span className="border border-gray-200 text-sm rounded-full px-4 py-2 flex gap-2 items-center justify-center text-dark-brown w-fit">
              <MdOutlinePets className="rotate-20" /> Adoção responsável
            </span>
            <h1 className="text-4xl font-semibold font-detail text-dark-green mt-2">Instituto Anhangá</h1>
            <p className="font-medium text-dark-brown">Resgatando vidas, construindo esperança</p>
            <p className="text-sm">Somos uma organização sem fins lucrativos dedicada ao resgate, cuidado e reabilitação de cães abandonados. Cada animal merece uma segunda chance de ser feliz em um lar amoroso.</p>

            <div className="grid grid-cols-2 gap-3 mt-8">
              <ButtonDefault
                text="Quero adotar"
                prefix={<FaRegHeart />}
                onClick={() => { }} />

              <ButtonDefault
                text="Como ajudar"
                className="bg-white border-2 border-dark-green !text-dark-green hover:!bg-gray-100"
                prefix={<LuHandHeart />}
                onClick={() => { }} />
            </div>
          </div>
          <YoutubeEmbed videoId="E5F3QWllwQ8" />

        </section>
      </main>
    </>

  );
}
