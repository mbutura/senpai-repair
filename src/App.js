import React from "react"
import Home from './routes/Home'
import Login from './routes/Login'
import NotFound from './routes/NotFound'
// import ManageJobs from './routes/ManageJobs'
import ManagePersonnel from './routes/ManagePersonnel'
import { Routes, Route } from "react-router-dom"


function App() {
  return(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manage">
          <Route path="personnel" element={<ManagePersonnel />} />
        </Route>
        {/* <Route path="/manage/jobs" element={<ManageJobs />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default App;

