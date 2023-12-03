import React from 'react'
import { Link } from 'react-router-dom'

const NavBar=(props)=> {

    return (
      <div>
    <nav className={`navbar fixed navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}  >
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link"  to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/arts">Arts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/us">US-News</Link>
        </li>
      </ul>
    </div>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
    </div>
  </div>
</nav>
      </div>
    )
  }


export default NavBar
