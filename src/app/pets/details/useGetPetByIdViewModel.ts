import { IPet } from "@/app/types/petType"
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify";

export default function useGetPetByIdViewModel() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter()
    const searchParams = useSearchParams();
    const pet_id = searchParams.get("id");


    const [pet, setPet] = useState<IPet>({
        tipo: "",
        nome: "",
        sexo: "",
        idade: 0,
        idadeUnidade: "",
        porte: "",
        isCastrado: false,
        isVacinado: false,
        isVermifugado: false,
        descricao: "",
        fotoUrl: ""
    })

    const getPetById = useCallback(async (id: string) => {
        try {
            setIsLoading(true)

            const response = axios.get(`${process.env.NEXT_PUBLIC_URL_API}/pet/${id}`)
            const data = (await response).data

            console.log(data)
            setPet(data)
        } catch (error: any) {
            console.log(error.response?.data.errors);
            toast.error(error.response?.data.errors)
        }
    }, [])

    useEffect(() => {
        if (!pet_id) return;
        getPetById(pet_id);

    }, [pet_id, getPetById])

    return {pet}
}