import { useCallback, useEffect, useState } from "react"
import { IPet } from "../types/petType"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

export default function usePetsViewModel() {
    const [pets, setPets] = useState<IPet[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/auth/login");
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    const getPets = useCallback(async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            toast.error("Faça login para acessar")
            return;
        };

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
        if (isAuthenticated) {
            getPets()
        }
    }, [isAuthenticated, getPets])



    const deletePet = async (id: string) => {
        const token = localStorage.getItem("token");

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
            console.log(msg)
            toast.error("Erro ao deleter pet, contate o suporte");
        } finally {
            setIsLoading(false)
        }
    }


    

    return { isLoading, pets, deletePet, router }
}