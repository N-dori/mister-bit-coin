

import { userService } from '../services/user.service'
import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

export  class SignupPage extends Component {
    state = {
        user: userService.getEmptyUser()
    }
    onSignup = () => {
        userService.signup(this.state.user)

    }
    handleChange = ({ target }) => {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = target.checked
                break;
        }
        this.setState(({ user }) => ({ user: { ...user, [field]: value } }))
    }

  render() {
    const { name }= this.state.user
    return (
 <section className='signin-page-container' >
    <img src="https://static.vecteezy.com/system/resources/thumbnails/007/872/293/small_2x/abstract-digital-background-with-technology-circuit-board-texture-electronic-motherboard-illustration-communication-and-engineering-concept-illustration-free-vector.jpg" alt="" />
    <section className="signin-modal-container">
    <h2 className="signin-title">Sign-in</h2>

      <label htmlFor="name"> Enter full name
        <input value={name} onChange={this.handleChange} className="sign-in-input" required type="text" name="name" id="name" placeholder="name?"/>
      </label>
      <Link className="sign-in-btn-link" to="/">
      <button className="sign-in-btn" onClick={this.onSignup}>Sign In</button>
      <p>Don't have a Blockchain Account? <span> Sign up Now !</span></p>
      </Link>
  </section>

 </section>
    )
  }
}
