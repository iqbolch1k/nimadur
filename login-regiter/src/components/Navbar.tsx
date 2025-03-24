import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { removeToken } from '../api/config/tokenConfig'
import { auth } from '../api/config/auth'
import BtnTheme from '../theme/BtnTheme'
import { useThemeContext } from '../context/BtnThemeContext'
function Navbar() {
  const logout = () => {
    removeToken()
  }
  const { theme } = useThemeContext()
  const isAuth = auth()
  return (
    <div className='continer navbar'>
      <div className={`navbar-logo ${theme === 'light' ? 'light' : ''}`}>
        <div>Iqboljon
          <p className='navbar-span'>Memon</p>
        </div>
      </div>
      <div className={`navbar-navlink ${theme === 'light' ? 'light' : ''}`}>
        <nav>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={'/'}>Home</NavLink>
          {
            isAuth ?
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={'/users'}>Users</NavLink>
              :
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={'/login'}>Login</NavLink>
          }
        </nav>
      </div>
      <div className='btns'>
        {
          isAuth ?
            <button onClick={logout} className={`navbar-btn ${theme === 'light' ? 'light' : ''}`}>Log out</button>
            : '' 
          } 
          <BtnTheme />
          </div>
    </div>
  )
}

export default Navbar