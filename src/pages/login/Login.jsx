import styles from './Login.module.css'
 import { useState } from 'react'
 import { useLogin } from '../../hooks/useLogin'


function Login() {
 const [email, setEmail]= useState('')
 const [password, setPassword]= useState('')
 const {login, error, isPending } = useLogin()

  const handleSubmit=(e) => {
    e.preventDefault()
    login(email, password)
  } 
  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>LOGIN</h2>
      <label htmlFor="">
        <span> Email:</span>
        <input
          type="email"
          onChange={(e)=> setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label htmlFor="">
        <span>Password:</span>
        <input 
          type="password" 
          onChange={(e)=> setPassword(e.target.value )}
          value={password}
        />
      </label>
      {!isPending && <button className='btn'>Login</button>}
      {isPending && <button className='btn' disabled>Loading</button>}
      {error && <p>{error}</p>}
    </form>
  )
}

export default Login