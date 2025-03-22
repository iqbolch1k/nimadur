import { setToken } from '../config/tokenConfig';
import { API_URL } from './../API';


export const login = async (username: string, password: string) => {
    try {
        const response = await fetch(`${API_URL}/token/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username, password: password })
            }
        )
        if (!response.ok) {
            throw new Error("Loginda xatolik")
        }
        const data = await response.json();
        setToken(data.access, data.refresh)
    } catch (error) {
        throw new Error((error as Error).message || 'Xatolik bor!')
    }
}
export const register = async (
    username: string,
    password: string,
    email: string,
    first_name: string,
    last_name: string

) => {
    const response = await fetch(`${API_URL}/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email, first_name, last_name })
    })

    if (!response.ok) {
        throw new Error("Login xatosi!")
    }

    window.location.href = '/login'

}