import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Add from './components/Add'
import{Route,Routes} from 'react-router-dom'
const App = () => {
  return (
     <>
    <Navbar></Navbar>
    <Routes>
    <Route element={<Home/>} path='/'></Route>
    <Route element={<Add/>} path='/add'></Route>
    </Routes>
    </>
  )
}

export default App