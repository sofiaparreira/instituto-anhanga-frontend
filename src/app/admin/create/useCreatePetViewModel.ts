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
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [image, setImage] = useState<any>();
  const [pet, setPet] = useState<IPet>({
    _id: 0,
    nome: "",
    tipo: "",
    sexo: "",
    idade: 0,
    porte: "",
    idadeUnidade: "anos",
    isCastrado: null,
    isVacinado: null,
    isVermifugado: null,
    descricao: "",
    fotoUrl: ""
  })

  console.log(pet)

  // ---------- HANDLE UPLOAD ----------
  const handleUpload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "unsigned_pet_upload");

    try {
      setIsLoading(true)
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const uploadedImage = await response.json();
      setImage(uploadedImage)

      setPet((prev: any) => ({
        ...prev,
        fotoUrl: uploadedImage.secure_url,
      }));
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsLoading(false)
    }
  };

  // ---------- CREATE PET ----------
  const createPet = async (e: React.FormEvent<HTMLFormElement>) => {

    const token = localStorage.getItem("token")
    try {
      setIsLoading(true)
      e.preventDefault();
      const response = await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/pet`,
        pet,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      const data = response.data
      console.log("pet criado", data);

    } catch (error: any) {
      console.log(error)

    } finally {
      setIsLoading(false)
    }
  }

  const toggleDropdownAge = () => {
    setIsDropdownAgeOpen(!isDropdownAgeOpen)
  }
  const toggleDropdownPorte = () => {
    setIsDropdownPorteOpen(!isDropdownPorteOpen)
  }




  return {
    createPet,
    setPet,
    pet,
    isDropdownAgeOpen,
    toggleDropdownAge, toggleDropdownPorte, isDropdownPorteOpen,
    handleUpload,
    isLoading,
    image


  }
}