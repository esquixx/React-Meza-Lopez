import React from 'react'
import { Link, Params } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Hyper Mega Red</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item"> 
        <Link className='nav-link' to="categoria/Gabinetes">Gabinetes</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to="categoria/Monitores">Monitores</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to="categoria/Perifericos">Perifericos</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link"><CartWidget /> </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar