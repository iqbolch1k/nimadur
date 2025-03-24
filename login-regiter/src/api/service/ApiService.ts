import { getAccessToken, refreshAccessToken } from "../config/tokenConfig"

export const fetchWithAuth = async<T>(url: string, options: RequestInit = {}): Promise<T | null> => {
    let token = getAccessToken()
    let response = await fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`
        }
    })
    if (response.status === 401) {
        token = await refreshAccessToken()
        if (!token) return null


        response = await fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${token}`
            }
        })
    }
    return response.json() as Promise<T>
}   