import { FormEvent, ReactElement, useState } from "react"
import { IContact } from "../types/contactType"
import axios from "axios";
import { toast } from "react-toastify";

export default function useContactViewModel() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [contact, setContact] = useState<IContact>({
        nome: "",
        email: "",
        telefone: "",
        mensagem: ""
    })

    const postContact = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            const response = axios.post(`${process.env.NEXT_PUBLIC_URL_API}/contato`, contact)
            const data = (await response).data
        } catch (error: any) {
            console.log(error.response?.data.errors);
            toast.error(error.response?.data.errors)
        } finally {
            setIsLoading(false)
        }
    }

    return { contact, setContact, isLoading, postContact }
}