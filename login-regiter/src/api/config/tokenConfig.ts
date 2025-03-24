import { API_URL } from "../API";

export const getAccessToken = (): string | null => localStorage.getItem('access_token');
export const getRefreshToken = (): string | null => localStorage.getItem('refresh_token');

export const setToken = (access: string, refresh: string): void => {
    localStorage.setItem('access_token', access)
    localStorage.setItem('refresh_token', refresh)
}

export const removeToken = (): void => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    window.location.href = '/'
}

export const refreshAccessToken = async (): Promise<string | null> => {
    const refreshToken = getRefreshToken()

    if (!refreshToken) {
        removeToken()
        window.location.href = '/login'
        return null
    }
    try {
        const response = await fetch(`${API_URL}/token/refresh/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({refresh:refreshToken})
        })
        if(!response.ok){
            removeToken()
            window.location.href = '/login'
            return null
        }

        const data = await response.json()
        setToken(data.access, data.refresh)
        return data.access
    } catch (error) {
        console.error("Refresh token is not valid" , error);
        removeToken()
        window.location.href = '/login'
        return null

        
    }
}
