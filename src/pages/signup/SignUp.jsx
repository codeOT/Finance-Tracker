import styles from './SignUp.module.css'
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

function SignUp() {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [displayName, setDisplayName] = useState('')
 const {signup, isPending, error} = useSignup()

  const handleClick = (e) =>{
    e.preventDefault()
    signup(email, password, displayName)
    // setEmail('')
    // setPassword('')
    // setUserName('')

  }

  return (
    <form onSubmit={handleClick} className={styles['signup-form']}>  
      <h2> SIGN UP</h2>
     
      <label htmlFor="">
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <label htmlFor="">
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>
      <label htmlFor="">
        <span>DisplayName:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          required
        />
      </label>
      {!isPending && <button className='btn'>Sign Up</button>}
      {isPending && <button className='btn' disabled>Loading..</button>}
      {error && <p>{error}</p>}
    </form>
  )
}

export default SignUp