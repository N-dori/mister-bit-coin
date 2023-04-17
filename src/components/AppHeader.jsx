import { Link, NavLink, withRouter } from "react-router-dom";

import React from 'react'

export  function AppHeader() {
  return (
    <>
    <header className="app-header ">
      <section className="btn-signin-container flex">
      <Link to="/signup-page">
      <button className="signup-btn">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOiD85vBVv50sGbhWjBtJbUqZE2DMalycOk1TDSB2DICsj7En5X8BfKqHrK7nfJwfo98&usqp=CAU" class="sign-in-img"/>Sign In</button>
       </Link>
      </section>
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
  
    </>

  )
}
