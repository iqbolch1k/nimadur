import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './context/BtnThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>, 
)
