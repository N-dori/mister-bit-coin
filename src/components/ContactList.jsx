import React from 'react'
import {ContactsPreview} from './ContactsPreview'

export  function ContactList({contacts , onSelectContactId}) {
  return (
      <section className='contacats-list-container'>
     
        <ul className='contacats-grid'>
            {contacts.map( contact => 
                <ContactsPreview key={contact._id} contact={contact}  onSelectContactId={ onSelectContactId }/>
                )}
        </ul>
        

    </section>
  )
}
