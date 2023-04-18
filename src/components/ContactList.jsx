import React from 'react'
import {ContactsPreview} from './ContactsPreview'

export  function ContactList({contacts ,getContactId, onRemoveContact }) {

function getContactId (id){
  return id
}
  return (
      <section className='contacats-list-container'>
     
   
            {contacts.map( contact => 
                <ContactsPreview key={contact._id} contact={contact}  getContactId={getContactId}  onRemoveContact={ onRemoveContact}/>
                )}
  
  

    </section>
  )
}
