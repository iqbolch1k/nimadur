import Navbar from '../../components/Navbar'
import { useThemeContext } from '../../context/BtnThemeContext'

import './Home.css'
function Home() {
  const {theme} = useThemeContext()
  return (
    <div>
      <Navbar/>
     <h1 className={`home ${theme === 'light' ? 'light' : ''}` }>Home pages</h1>
    </div>
  )
}

export default Home