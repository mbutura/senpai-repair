import React from "react"
import Home from './routes/Home'
import Login from './routes/Login'
import NotFound from './routes/NotFound'
import Manage from './routes/Manage'
import { Routes, Route } from "react-router-dom"


function App() {
  return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default App;

