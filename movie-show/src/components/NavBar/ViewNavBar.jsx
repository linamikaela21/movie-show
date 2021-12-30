import { NavLink } from 'react-router-dom'

import './../../styles/NavBar.scss'
import './../../styles/Commun/index.scss'

export const ViewNavBar = () => {
    return (
        <div className='navLinks'>
            <div>
                <NavLink
                    to='/'
                    className='navLink'
                >
                    Home
                </NavLink>
                <NavLink
                    to='/movies'
                    className='navLink'
                >
                    Movies
                </NavLink>
            </div>
        </div>
    )
}
