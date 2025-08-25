
"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"

export default function useLoginViewModel() {

    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        senha: ""
    })

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const response = await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/login`, user);
            localStorage.setItem("token", response.data.token);
            router.push('/admin/create');
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Erro desconhecido!");
            }
        }
    }

    return { user, setUser, handleLogin }
}