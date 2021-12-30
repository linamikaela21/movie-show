import { Link } from 'react-router-dom'

import './../../styles/LandingPage.scss'
import './../../styles/Commun/index.scss'

export const LandingPage = () => {
  return (
    <div className='fondo'>
      <div className='divTitle'>
        <h1 className='title'>Movie Show</h1>
        <Link to='/movies'>
          <div><button className='buttonWelcome'>See Movies</button></div>
        </Link>
      </div>
    </div>
  )
}
