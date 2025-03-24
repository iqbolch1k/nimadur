import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { auth } from "../api/config/auth"

const PrivateRoute = ({children}: {children:ReactNode}) =>{
    const isAuth = auth()
    console.log("is", isAuth);
    
    return isAuth ? children : <Navigate to={'/login'}/>
}

export default PrivateRoute