import { useNavigate } from "react-router-dom";
import './Login.css'
import React, { useState } from "react";
import { login } from "../../api/service/LoginService";
import { useThemeContext } from "../../context/BtnThemeContext";

interface FormDataInterface {
  username: string;
  password: string;
}

function Login() {
  const [formData, setFormData] = useState<FormDataInterface>({ username: '', password: '' })
  const [loding, setLoding] = useState<boolean>(false)

  const navigate = useNavigate();

  const registerSubmit = () => {
    navigate('/register')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prov) => ({ ...prov, [name]: value }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username.trim() || !formData.password.trim()) {
      alert("Inputs are empty! Fill them in.");
      return;
    }
    try {
      setLoding(true)
      await login(formData.username, formData.password)
      navigate('/')
    } catch (error) {
      alert("There is an error in the login or password.")
    } finally {
      setLoding(false)
    }

  }
  const { theme } = useThemeContext()
  return (
    <div className='login'>
      <div className={`login-pages ${theme == 'light' ? 'light' : ''}`}>
        <h1>Login</h1>
        <div className={`login-pages-input ${theme == 'light' ? 'light' : ''}`}>
          <form onSubmit={handleSubmit} >
            <div>
              <label>Username</label>
              <input
                name="username"
                onChange={handleChange}
                type="text"
                placeholder="Username..."
              />
            </div>
            <div>
              <label>Password</label>
              <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Password"
                maxLength={10}
                minLength={6}
              />
            </div>
            <div>
              <button type="submit" className={`login-btn ${theme == 'light' ? 'light' : ''}`} disabled={loding}>
                {loding ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
          <p className={`login-register ${theme == 'light' ? 'light' : ''}`}>Click to register! <b onClick={(registerSubmit)}>Register</b></p>
        </div>
      </div>
    </div>
  )
}

export default Login