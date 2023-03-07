import React from 'react'
import { NavLink } from "react-router-dom"
// import Header from './Header'
// import Footer from './Footer'

export default function Home() {
  return (
    <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-5">
                <a class="navbar-brand" href="#!">Senpai Engineering</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><NavLink to='/' className="nav-link active">Home</NavLink></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Staff login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Page Content--> */}
        <div class="container px-4 px-lg-5">
            {/* <!-- Heading Row--> */}
            <div class="row gx-4 gx-lg-5 align-items-center my-5">
                <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80" alt="..." /></div>
                <div class="col-lg-5">
                    <h2 class="font-weight-light">Quality Since 1987</h2>
                    <p>We are approved to 1SO-9001 and as an inspection and repair company. Our goal is to provide exceptional customer service and quick turnaround times so that our customers can get back to using their devices as soon as possible.</p>
                </div>
            </div>
            {/* <!-- Call to Action--> */}
            <div class="card text-white bg-secondary my-5 py-4 text-center">
                <div class="card-body"><p class="text-white m-0">When paired with our tools, we mean repair!</p></div>
            </div>
            {/* <!-- Content Row--> */}
            <div class="row gx-4 gx-lg-5">
                <div class="col-md-4 mb-5">
                    <div class="card h-100">
                        <div class="card-body">
                            <h2 class="card-title">Electrical</h2>
                            <p class="card-text">Use our electrical technicians for domestic and commercial electrical work</p>
                        </div>
                        <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
                <div class="col-md-4 mb-5">
                    <div class="card h-100">
                        <div class="card-body">
                            <h2 class="card-title">Plumbing</h2>
                            <p class="card-text">Use our Plumbers for domestic and commercial water work</p>
                        </div>
                        <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
                <div class="col-md-4 mb-5">
                    <div class="card h-100">
                        <div class="card-body">
                            <h2 class="card-title">Inspection</h2>
                            <p class="card-text">We are 1SO-9001 approved! We care about Occupational Safety and Health</p>
                        </div>
                        <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer--> */}
        <footer class="py-5 bg-dark">
            <div class="container px-4 px-lg-5"><p class="m-0 text-center text-white">Copyright &copy; Senpai Ventures 1987 - 2023</p></div>
        </footer>
    </div>
  )
}