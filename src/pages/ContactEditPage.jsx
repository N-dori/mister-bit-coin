import React, { Component } from 'react'
import { contactService } from '../services/contact.service'

export  class ContactEditPage extends Component {

    state = {
        contact: contactService.getEmptyContact()
    }
   async componentDidMount(){
        const contactId = this.props.match.params.id
        console.log('this.props.match.params',this.props.match.params.id)
        if(contactId){
           const contact = await contactService.getContactById(contactId)

            this.setState({contact})
        }
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
        this.setState(({ contact }) => ({ contact: { ...contact, [field]: value } }))
    }
    save = async(ev)=>{
        ev.preventDefault()
        try{
          await  contactService.saveContact(this.state.contact)
            this.props.history.push('/contacts')

        }catch(err){
            console.log('error',err)
        }
    }
  render() {
   
    const {name, email, phone, _id  } = this.state.contact
    return (
        <section className='edit-page-container flex'>
    <h1>{ _id? 'Edit ' : 'Add ' } Page</h1>
    <form className='edit-form flex' onSubmit={this.save}>
        {name? <img className='edit-page-img' src={`https://robohash.org/${name}`}/>:<img className='edit-page-img' src={`https://cdn-icons-png.flaticon.com/512/6596/6596121.png`}/>}
        <label htmlFor="name">Name</label>
        <input onChange={this.handleChange} value={name} type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input onChange={this.handleChange} value={email} type="email" name="email" id="email" />
        <label htmlFor="phone">Phone</label>
        <input onChange={this.handleChange} value={phone} type="text" name="phone" id="phone" />
        <button className='btn-edit'>{ _id? 'Edit' : 'Add' }</button>
    </form>

        </section>
    
  
    )
  }
}
