import './Navbar.css'
import logoImg from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'
import { removeToken } from '../api/config/tokenConfig'
function Navbar() {
  const logout = () => {
    removeToken()
  }
  return (
    <div className='continer navbar'>
      <div className='navbar-logo'>
        <img src={logoImg} alt="" />
        <div>Iqboljon
          <p className='navbar-span'>Memon</p>
        </div>
      </div>
      <div className='navbar-navlink'>
        <nav>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={'/'}>Home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={'/users'}>Users</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={'/login'}>Login</NavLink>
        </nav>
      </div>
      <button onClick={logout} className='navbar-btn'>
        Log out
      </button>
    </div>
  )
}

export default Navbar