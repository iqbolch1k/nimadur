import { useThemeContext } from "../context/BtnThemeContext"
import './theme.css'
function ThemeProvader() {
    const { theme, toggleTheme } = useThemeContext()
    return (
        < div >
            <button className={`theme-btn ${theme == 'light' ? 'light' : ''}`} onClick={toggleTheme}>
                {
                    theme === 'light'
                        ?
                        <i className="fa-solid fa-moon"></i>
                        :
                        <i className="fa-solid fa-sun"></i>
                }
            </button>
        </div >
    )
}

export default ThemeProvader