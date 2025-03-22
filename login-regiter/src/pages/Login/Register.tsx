import { useState } from 'react';
import './Login.css'
import { useNavigate } from "react-router-dom";
import { register } from '../../api/service/LoginService';
interface FormData {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
}
function Register() {
  const [formData, setFormData] = useState<FormData>({ username: '', password: '', email: '', first_name: '', last_name: '' })
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate();
  const registerSubmit = () => {
    navigate('/login')
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await register(formData.username, formData.password, formData.email, formData.first_name, formData.last_name);
      navigate('/login')
    } catch (error) {
      throw new Error('Xatolik')
    } finally {
      setLoading(false)
    }

  }
  return (
    <div>
      <div className='login'>
        <div className='login-pages'>
          <h1>Register</h1>
          <div className='login-pages-input'>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Last Name</label>
                <input
                  name="last_name"
                  value={formData.last_name}
                  placeholder="LastName..."
                  onChange={handleChange}
                  type="text" />
              </div>
              <div>
                <label>First Name</label>
                <input
                  name="first_name"
                  value={formData.first_name}
                  placeholder="firstName..."
                  onChange={handleChange}
                  type="text" />
              </div>
              <div>
                <label>Username</label>
                <input
                  name="username"
                  value={formData.username}
                  placeholder="Username..."
                  onChange={handleChange}
                  type="text" />
              </div>
              <div>
                <label>Email</label>
                <input
                  name="email"
                  value={formData.email}
                  placeholder="Emaillingiz..."
                  onChange={handleChange}
                  type="email" />
              </div>
              <div>
                <label>Password</label>
                <input
                  name="password"
                  value={formData.password}
                  placeholder="Password..."
                  onChange={handleChange}
                  type="password" />
              </div>
              <div>
                <button className='login-btn' type="submit" disabled={loading}>{loading ? 'Saqlanmoqda...' : 'Login'}</button>
              </div>
            </form>
            <p className='login-register'>Click to login! <b onClick={(registerSubmit)}>Login</b></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register