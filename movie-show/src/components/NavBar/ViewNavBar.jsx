import { NavLink } from 'react-router-dom'

import './../../styles/NavBar.scss'
import './../../styles/Commun/index.scss'

export const ViewNavBar = () => {
    return (
        <div className='navContainer'>
            {/* <div className='navLinks'><NavLink to='/'><img src={logo} alt='No found'/></NavLink></div> */}
            <div className='navLinks'>
                <div className=''>
                    <NavLink
                        to='/'
                        className='navLink'
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to='/movies'
                        className='navLink'
                    >
                        Movies
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
