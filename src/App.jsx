// import { useState } from 'react'
import Header from './Components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Articles from './Components/Articles'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
    <Header/>
    <Nav/>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/articles' element={<Articles/>}/>
      </Routes>
    </main>
    </>
  )
}

export default App
