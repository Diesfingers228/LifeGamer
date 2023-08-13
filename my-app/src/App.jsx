import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Main from './Components/Main'
import Info from './Components/Info'

function App() {
  
  return (
    <>
    <Header />
   
    <Routes>
      <Route exact path='/' element={<Main />}></Route>
      <Route exact path='/info' element={<Info />}></Route>
    </Routes>
    </>

  )
}

export default App