import { RouterWeb } from './RouterWeb'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Footer } from './components/Footer/Footer'
import './App.css'

export const App = () => {
  
  return (
    <div className='App'>
      <NavBar />
      <RouterWeb />
      <Footer />
    </div>
  )
}