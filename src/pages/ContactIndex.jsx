import React, { Component } from 'react'
import {contactService} from '../services/contact.service'
import { ContactList } from '../components/ContactList'
import { ContactFilter } from '../components/ContactFilter'
import { AddButton } from '../components/AddButton'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contact.actions'


export  class _ContactIndex extends Component { 



componentDidMount(){
    this.props.loadContacts()
    console.log('contact page loaded', this.props);
}



onChangeFilter = (filterBy) => {
this.props.setFilterBy(filterBy)
this.props.loadContacts()
}



onRemoveContact = (contactId) => {
    try{
        console.log('contactId',contactId)
      this.props.removeContact(contactId)
    }catch(err){
        console.log('can not remove contact');
    }
}


render() {
      const style= {display:""}
    const {contacts,filterBy} = this.props
    if (!contacts) return  <div>Loading.... </div>
    return (
        <section className='contact-page-container'>
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
        </section>
    )
  }
}

const mapStateToProps = (state) =>({
    contacts: state.contactModule.contacts,
    filterBy: state.contactModule.filterBy,
})

const mapDispatchToProps = {
    loadContacts ,
    removeContact,
    setFilterBy,

}

export const ContactIndex = connect(mapStateToProps,mapDispatchToProps)(_ContactIndex)