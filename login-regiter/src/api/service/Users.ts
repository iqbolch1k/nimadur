import { API_URL } from "../API"
import { fetchWithAuth } from "./ApiService"

const UserService = {
    getAllUser: async () =>{
        try {
            const respone = await fetchWithAuth(`${API_URL}/all-accounts/`)
            return respone
        } catch (error) {
            console.log((error as Error).message)
        }
    }
}

export default UserService