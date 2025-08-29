"use client"
import { IPet } from "@/app/types/petType"
import axios from "axios";
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify";

export default function useCreatePetViewModel() {

  const router = useRouter();
  const [isDropdownAgeOpen, setIsDropdownAgeOpen] = useState<boolean>(false);
  const [isDropdownPorteOpen, setIsDropdownPorteOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [image, setImage] = useState<any>();
  const [pet, setPet] = useState<IPet>({
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

  const searchParams = useSearchParams();
  const pet_id = searchParams.get('id');

  // ----- TOKEN AUTENTICAÇÃO -----
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);


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
      router.push('/admin')

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



  const getPetById = async (id: string) => {
    if (!id) {
      toast.error("Pet não encontrado");
      return;
    }

    try {
      setIsLoading(true)
      const response = axios.get(`${process.env.NEXT_PUBLIC_URL_API}/pet/${id}`)
      const data = (await response).data;
      console.log(data)
      setPet(data)
    } catch (error: any) {
      const msg = error.response?.data?.message || error.response?.data || error.message || "Erro ao deletar";
      console.log(msg)
      toast.error("Erro ao editar pet, contate o suporte");
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (pet_id) {
      getPetById(pet_id)
    }
  }, [])


  // --------- EDITAR CADASTRO DE PET ----------
  const updatePet = async (id: string, e: React.FormEvent<HTMLFormElement>) => {
    const token = localStorage.getItem("token")
    if (!token) {
      toast.error("Faça login para ter acesso a essa funcionalidade")
      return
    };

    if (!id) {
      toast.error("Pet não encontrado");
      return;
    }
    console.log('a',token)

    try {
      setIsLoading(true)
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_URL_API}/pet/${id}`,
        pet,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = (await response).data;
      console.log("Editado", data)
      router.push("/admin")
    } catch (error: any) {
      const msg = error.response?.data?.message || error.response?.data || error.message || "Erro ao deletar";
      console.log(msg)
      toast.error("Erro ao editar pet, contate o suporte");
    } finally {
      setIsLoading(false);
    }
  }



  return {
    createPet,
    setPet,
    pet,
    isDropdownAgeOpen,
    toggleDropdownAge, toggleDropdownPorte, isDropdownPorteOpen,
    handleUpload,
    isLoading,
    image,
    updatePet,
    pet_id


  }
}