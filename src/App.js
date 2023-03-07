import React from "react"
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import { Routes, Route } from "react-router-dom"


function App() {
  return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default App;

