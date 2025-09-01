"use client"

import ButtonDefault from "@/components/buttons/ButtonDefault";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { MdOutlinePets } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { LuHandHeart } from "react-icons/lu";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import PetCard from "@/components/card/PetCard";
import useMainViewModel from "./useMainViewModel";
import Loading from "@/components/Loading";
import DonationCard from "@/components/card/DonationCard";
import Footer from "@/components/Footer";

export default function Home() {

  const {
    pets,
    isLoading,
    router
  } = useMainViewModel();
  return (


    <main>
      <section className="xl:px-32 lg:px-24 px-5 py-16 
                            md:grid md:grid-cols-2 max-md:flex max-md:flex-col-reverse lg:gap-24 gap-16 items-center ">

        <div className="flex flex-col gap-3 justify-center">
          <span className="border border-gray-200 text-sm rounded-full px-4 py-2 flex gap-2 items-center justify-center text-dark-brown w-fit">
            <MdOutlinePets className="rotate-20" /> Adoção responsável
          </span>
          <h1 className="text-4xl font-semibold font-detail text-dark-green mt-2">Instituto Anhangá</h1>
          <p className="font-medium text-dark-brown">Resgatando vidas, construindo esperança.</p>
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

      <section className="xl:px-32 lg:px-24 px-5 py-16">
        <h1 className="text-xl font-semibold text-center text-dark-green">Prontos para um lar</h1>
        <p className="text-gray-600 text-center mb-16 text-sm">Alguns dos nossos animais aguardando por você</p>

        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {pets?.length > 0 ? (
            pets.map((pet) => <PetCard key={pet._id} pet={pet} />)
          ) : (
            <p>Nenhum pet encontrado</p>
          )}

        </div>

        <div className="flex justify-center items-center gap-4 mx-auto mt-12">
          <div className="w-fit">
            <ButtonDefault onClick={() => router.push('/pets/dogs')} className="text-gray-800 bg-white border-2 border-dark-green hover:bg-gray-50" text="Cães para adoção" />
          </div>
          <div className="w-fit">
            <ButtonDefault onClick={() => router.push('/pets/cats')} className="text-gray-800 bg-white border-2 border-dark-green hover:bg-gray-50" text="Gatos para adoção" />
          </div>
        </div>
      </section>


      <section className="xl:px-32 lg:px-24 px-5 py-16 bg-gray-100">
        <h1 className="text-xl font-semibold text-dark-green text-center mb-16">Quem Somos</h1>
        <p className="">
          Somos uma entidade sem fins lucrativos localizada na cidade de Ibirité, região metropolitana de Belo Horizonte/MG. No Instituto abrigamos até a adoção, cães e gatos que viviam nas ruas, em situação de risco de morte e maus tratos. Eles recebem tratamento veterinário, assim como todos os cuidados necessários e, depois de curados, são castrados e disponibilizados para adoção.</p>

        <div className="flex gap-16 justify-center items-center mt-12">
          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="text-2xl font-semibold text-medium-green">+ 500</span>
            <p>Animais resgatados</p>
          </div>

          <div className="flex flex-col gap-1 justify-center items-center">
            <span className="text-2xl font-semibold text-medium-green">+ 500</span>
            <p>Adoções realizadas</p>
          </div>

        </div>
      </section>

      <section className="xl:px-32 lg:px-24 px-5 py-16">
        <h1 className="text-xl font-semibold text-center text-dark-green">Processo de adoção</h1>
        <p className="text-gray-600 text-center mb-16 text-sm 2xl:mx-32 xl:mx-16 lg:mx-8">Ao decidir adotar um pet, você passará por um processo que garante a segurança e o bem-estar dos animais. Ao final, poderá levá-lo para casa com todo o cuidado e responsabilidade que ele merece.</p>


        <div className="p-8 bg-medium-green/15 grid grid-cols-4 xl:gap-32 gap-8 2xl:mx-32 xl:mx-16 lg:mx-8">


          <div className="flex flex-col justify-center items-center gap-3">
            <span className="flex justify-center items-center  bg-dark-green text-white w-10 h-10 font-medium rounded-full">1</span>
            <span className="text-center text-sm font-medium">Escolha seu futuro melhor amigo</span>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <span className="flex justify-center items-center  bg-dark-green text-white w-10 h-10 font-medium rounded-full">2</span>
            <span className="text-center text-sm font-medium">Escolha seu futuro melhor amigo</span>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <span className="flex justify-center items-center  bg-dark-green text-white w-10 h-10 font-medium rounded-full">3</span>
            <span className="text-center text-sm font-medium">Escolha seu futuro melhor amigo</span>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <span className="flex justify-center items-center  bg-dark-green text-white w-10 h-10 font-medium rounded-full">4</span>
            <span className="text-center text-sm font-medium">Escolha seu futuro melhor amigo</span>
          </div>

        </div>
      </section>

      <section className="xl:px-32 lg:px-24 px-5 py-16">

        <div className="2xl:mx-32 xl:mx-16 lg:mx-8">
          <DonationCard className="border-2 p-6 border-gray-100" />
        </div>

      </section>


      <Footer />
      
      {isLoading && (
        <Loading />
      )}


    </main>



  );
}
