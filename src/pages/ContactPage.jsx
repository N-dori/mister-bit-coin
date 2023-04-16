import React, { Component } from 'react'
import {contactService} from '../services/contact.service'
import { ContactList } from '../components/ContactList'
import { ContactFilter } from '../components/ContactFilter'
import { AddButton } from '../components/AddButton'
import {Link} from 'react-router-dom'
export  class ContactPage extends Component { 

state={
    contacts:null,
    SelectContactId:null,
       filterBy:{
        email:'',
        name:'',
        phone:'',
    }
}

componentDidMount(){
    this.loadContacts()
    console.log('contact page loaded');
}

loadContacts = async () => {
    try{
       
        console.log('filterBy in loadContacts ',this.state.filterBy);

        const contacts= await contactService.getContacts(this.state.filterBy)
        console.log('contacts', contacts);
        this.setState({contacts})

    }catch (err){
        console.log('error can not load contacts',err);
    }
}

onChangeFilter = (filterBy) => {
    this.setState( { filterBy: { ...filterBy } } ,this.loadContacts)

}


onRemoveContact= (contactId) => {
    contactService.deleteContact(contactId)
    const idx= this.state.contacts.findIndex(contact=>contact._id === contactId )
    const contacts = [...this.state.contacts]
    contacts.splice(idx,1)
    this.setState({contacts})
}
  render() {
    const {contacts,filterBy,SelectContactId} = this.state
    return (
        <section className='contact-page-container'>
            {contacts?
            <>
            <h2>Contact-List</h2>
            <ContactFilter
             onChangeFilter={this.onChangeFilter} 
             filterBy={filterBy}/>
            <ContactList 
            onRemoveContact={this.onRemoveContact}
              contacts={contacts}/>
              <Link to="/contact/edit">
              <AddButton/>
              </Link>
            </>:
            <div>Loading.... </div>
         }
            

        </section>
    )
  }
}
