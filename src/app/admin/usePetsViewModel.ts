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
        } catch (error:any) {
            console.log(error)
            toast.error(error)
        } finally {
            setIsLoading(false)
        }

    },[])

    useEffect(() => {
        getPets()
    },[getPets])

    return {isLoading, pets}
}