import { useState } from "react"
import { IContact } from "../types/contactType"
import axios from "axios";

export default function useContactViewModel() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [contact, setContact] = useState<IContact>({
        nome: "",
        email: "",
        telefone: "",
        mensagem: ""
    })

    const postContact = async () => {
        try {
            setIsLoading(true)
            const response = axios.post(`${process.env.NEXT_PUBLIC_URL_API}`, contact)
            const data = (await response).data
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return {contact, setContact, isLoading}
}