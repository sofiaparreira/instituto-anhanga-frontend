"use client"
import { IPet } from "@/app/types/petType"
import axios from "axios";
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify";

export default function useCreatePetViewModel() {
    
    const router = useRouter();
    const [isDropdownAgeOpen, setIsDropdownAgeOpen] = useState<boolean>(false);
    const [isDropdownPorteOpen, setIsDropdownPorteOpen] = useState<boolean>(false);
    const [pet, setPet] = useState<IPet>({
        nome: "",
        tipo: "",
        sexo: "",
        idade: 0,
        porte: "",
        idadeUnidade: "anos",
        isCastrado: false,
        isVacinado: false,
        isVermifugado: false,
        descricao: "",
        fotoUrl: ""
    })

    console.log(pet)
    const createPet = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const response = await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/pet`, pet)
            const data = response.data
            console.log("pet criado",data);
            
        } catch (error:any) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Erro desconhecido");
            }
            
        }
    }

    const toggleDropdownAge = () => {
        setIsDropdownAgeOpen(!isDropdownAgeOpen)
    }
    const toggleDropdownPorte = () => {
        setIsDropdownPorteOpen(!isDropdownPorteOpen)
    }


    return { createPet, setPet, pet, isDropdownAgeOpen, toggleDropdownAge, toggleDropdownPorte, isDropdownPorteOpen
        
     }
}