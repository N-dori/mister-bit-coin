import { Link, NavLink, withRouter } from "react-router-dom";

import React from 'react'

export  function AppHeader() {
  return (
    <header className="app-header">
        <div className="logo-container flex">
                 <img className='logo'src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png'/>
                 <span>Mister Bit Coin</span>
   
        </div>
        <nav  className="main-menu">
        <NavLink exact to="/"> Home</NavLink>
        <NavLink to="/contacts"> Contacts</NavLink>
        <NavLink to="/charts"> Chatrs</NavLink>
        <NavLink to="/about"> About</NavLink>
        </nav>
    </header>

  )
}
