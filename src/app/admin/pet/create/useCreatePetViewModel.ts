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

        const token = localStorage.getItem("token")
        try {
            e.preventDefault();
            const response = await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/pet`, 
                pet,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const data = response.data
            console.log("pet criado",data);
            
        } catch (error:any) {
            console.log(error)
            
        }
    }

    const toggleDropdownAge = () => {
        setIsDropdownAgeOpen(!isDropdownAgeOpen)
    }
    const toggleDropdownPorte = () => {
        setIsDropdownPorteOpen(!isDropdownPorteOpen)
    }

    // ---------- HANDLE UPLOAD ----------
    const handleUpload = async (e: any) => {
        const file = e.target.files[0];
        if(!file) return

        const data = new FormData();
        data.append("file", file)
        data.append("upload_preset", "unsigned_pet_upload")
        data.append("cloud_name", `${process.env.NEXT_PUBLIC_CLOUD_NAME}`)

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`, {
            method: "POST",
            body: data
        })

         const uploadedImage = await response.json();
        console.log(uploadedImage.url)

        } catch (error) {
            
        }
        

   
    }


    return { 
            createPet, 
            setPet, 
            pet, 
            isDropdownAgeOpen, 
            toggleDropdownAge, toggleDropdownPorte, isDropdownPorteOpen,
            handleUpload
        
     }
}