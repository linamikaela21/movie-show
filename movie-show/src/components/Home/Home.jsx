import './../../styles/Home.scss'
import { Movies } from '../Movies/Movies'

export const Home = () => {
    return (
        <div className='homeContent' style={{ height: '54vh' }}>
            {/* <div className='navContainer'>
                <SearchBar />
            </div> */}
            <Movies />
        </div>
    )
}
