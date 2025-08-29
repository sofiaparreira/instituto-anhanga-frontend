import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { IPet } from "@/app/types/petType"

export default function useCatViewModel() {
    const [pets, setPets] = useState<IPet[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getPets = useCallback(async () => {

        try {
            setIsLoading(true)
            const response = axios.get(`${process.env.NEXT_PUBLIC_URL_API}/pet/cats`)
            const data = (await response).data

            setPets(data)
        } catch (error: any) {
            console.log(error.response?.data.errors);
            toast.error(error.response?.data.errors)
        } finally {
            setIsLoading(false)
        }

    },[])

    useEffect(() => {
        getPets()
    },[getPets])

    return {isLoading, pets}
}