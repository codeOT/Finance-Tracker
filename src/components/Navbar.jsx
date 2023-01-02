import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar() {
    const { logout } = useLogout()
    const { user} = useAuthContext()
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>My Finance</li>
                { !user && (
                  <>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/signup'>SignUp</NavLink></li>
                  </>
                )}

                { user && (
                    <>
                     <li>Hey, {user.displayName}</li>
                     <li>
                      <button className='btn' onClick={logout}>Logout</button>
                     </li>
                   </>
               )}
            </ul>
        </nav> 
    )
}

export default Navbar