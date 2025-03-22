import { ReactNode } from "react"
import { getAccessToken } from "../api/config/tokenConfig"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}: {children:ReactNode}) =>{
    const isAuth = getAccessToken()
    return isAuth ? children : <Navigate to={'/login'}/>
}

export default PrivateRoute