import React from 'react'
import {ContactsPreview} from './ContactsPreview'

export  function ContactList({contacts , onRemoveContact}) {
  return (
      <section className='contacats-list-container'>
     
        <ul className='contacats-grid'>
            {contacts.map( contact => 
                <ContactsPreview key={contact._id} contact={contact}  onRemoveContact={onRemoveContact}/>
                )}
        </ul>
        

    </section>
  )
}
