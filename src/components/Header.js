import React from 'react'
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-5">
            <NavLink to='/' className="navbar-brand">Senpai Engineering</NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><NavLink to='/' className="nav-link active">Home</NavLink></li>
                    <li class="nav-item"><NavLink to='/login' className="nav-link">Staff login</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header;


