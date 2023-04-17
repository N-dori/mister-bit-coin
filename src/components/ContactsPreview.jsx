import React from 'react'
import { Link } from 'react-router-dom'
export  function ContactsPreview({contact ,  onSelectContactId}) {
  return (
    <article className='contact-card' onClick={()=>onSelectContactId(contact._id)}>
    
        <h2 className='contact-card-user-name flex'>{ contact.name }</h2>
        <div className='contact-card-user-img'>
        <img src={`https://robohash.org/${contact.name}`}/>
        </div>
        <span className='contact-card-user-email flex' >{contact.email}</span>
        <span className='contact-card-user-phone flex' >{contact.phone}</span>
      <div className='actions flex'>

          <Link className="details-link " to={`/contact/${contact._id}`}>
        Details
          </Link>
       
        <Link className="details-Edit-link" to={`/contact/edit/${contact._id}`}>Edit</Link>
      </div>
        

    </article>
  )
}
