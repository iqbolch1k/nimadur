import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Users from "./pages/Users/Users"
import Login from "./pages/Login/Login"
import NotFount from "./pages/NotFound/NotFount"
import Register from "./pages/Login/Register"
import PrivateRoute from "./router/PrivateRoute"

function App() {
  return (
    <div className="continer App-card" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </div>
  )
}

export default App