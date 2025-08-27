import { useCallback, useEffect, useState } from "react"
import { IPet } from "../types/petType"
import axios from "axios"
import { toast } from "react-toastify"

export default function usePetsViewModel() {
    const [pets, setPets] = useState<IPet[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getPets = useCallback(async () => {

        try {
            setIsLoading(true)
            const response = axios.get(`${process.env.NEXT_PUBLIC_URL_API}/pet`)
            const data = (await response).data

            setPets(data)
        } catch (error: any) {
            console.log(error)
            toast.error(error)
        } finally {
            setIsLoading(false)
        }

    }, [])

    useEffect(() => {
        getPets()
    }, [getPets])


    const deletePet = async (id: number) => {

        const token = localStorage.getItem("token")

        if (!token) {
            toast.error("Faça login para ter acesso a essa funcionalidade")
            return
        }

        if (!id) {
            toast.error("Pet não encontrado")
            return;
        }


        try {
            setIsLoading(true)
            const response = axios.delete(`${process.env.NEXT_PUBLIC_URL_API}/pet/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const data = (await response).data
            console.log("Deletado", data)
            getPets();

        } catch (error: any) {
            const msg = error.response?.data?.message || error.response?.data || error.message || "Erro ao deletar";
            toast.error(msg);
        } finally {
            setIsLoading(false)
        }
    }

    return { isLoading, pets, deletePet }
}