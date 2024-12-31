import {Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import History from './pages/History'
import Home from './pages/Home'
import Header from './component/Header'
import Footer from './component/Footer'

Routes
function App() {

  return (
    <>
    <Header/>
        <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
        </Routes>
    <Footer/>
    </>
  )
}

export default App
