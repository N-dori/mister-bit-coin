import React from 'react'
import { Link } from 'react-router-dom'
export  function ContactsPreview({contact, onRemoveContact }) {
  return (
    <article className='contact-card' >
        <div className='contact-info'>
          <Link to={`/contact/${contact._id}`}>
        <h2>{ contact.name }</h2>
        <img src={`https://robohash.org/${contact.name}`}/>
        <p>Click me if you want to know more about me</p>
          </Link>
        </div>
        <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
        <button onClick={()=>onRemoveContact(contact._id)}  >X</button>
        

    </article>
  )
}
