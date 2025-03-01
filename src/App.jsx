import { Route, Routes } from 'react-router-dom'
import './App.css'
import Wishlist from './pages/Wishlist'
import Home from './pages/Home'
import Cart from './pages/Cart'
import View from './pages/View'
import Pnf from './pages/Pnf'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/:id/view' element={<View/>}/>
        <Route path='/' element={<Pnf/>}/>

      </Routes>
    </>
  )
}

export default App
