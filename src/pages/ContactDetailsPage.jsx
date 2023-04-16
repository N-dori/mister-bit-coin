
import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import { Link } from 'react-router-dom'


export  class ContactDetailsPage extends Component {

    state = {
        contact :null
    }

    componentDidMount(){
        this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
          this.loadContact()
      }
  }

    loadContact= async () =>{
        if(!this.props.match.params.id)return 
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({contact})
    }
    onBack = () => {
      this.props.history.push('/contacts')
  }
  render() {
    const { contact } = this.state
    console.log('contact',contact)
   
    return (
        contact?
        <section className='details-container'>
            <div className='details-info-card'>
          <h1> Hello! my name is {contact.name}  </h1>
          <img src={`https://robohash.org/${contact.name}`}/>
          <p> I would love to hear back from you </p>
          <p>You can contact me via email <span className='details-info-email'>{contact.email}</span></p>
          <p>Or you can just call me <span className='details-info-phone'>{contact.phone}</span></p>
          
          <section className='nex-prev-container'>

          <Link to={`/contact/${contact.nextContactId}`}>Next Contact</Link>
          <Link to={`/contact/${contact.prevContactId}`}>Prev Contact</Link>

          </section>
          <button className='btn-back' onClick={this.onBack}>Back</button>
            </div>

        
      </section>:  <span>Loading...</span>
    )
  }
}
