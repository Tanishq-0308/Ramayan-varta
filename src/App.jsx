import Footer from './pages/Footer/Footer'
import Nav from './pages/Nav/Nav'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
