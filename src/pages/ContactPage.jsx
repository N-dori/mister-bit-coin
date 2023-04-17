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

onSelectContactId = (contactId) => {
    console.log('contactId',contactId)
    this.setState({SelectContactId:contactId})
}
  render() {
    const {contacts,filterBy,SelectContactId} = this.state
    if (!contacts) return  <div>Loading.... </div>
    return (
        <section className='contact-page-container'>
            <h2>Contact-List</h2>
            <>
            <ContactFilter
             onChangeFilter={this.onChangeFilter} 
             filterBy={filterBy}/>
            <ContactList 
            onSelectContactId={this.onSelectContactId}
              contacts={contacts}/>
              <Link to="/contact/edit">
              <AddButton/>
              </Link>
            </>
            

        </section>
    )
  }
}
