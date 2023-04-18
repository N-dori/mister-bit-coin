import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import { userService } from '../services/user.service'

export  class TransferFund extends Component {
        state = {
            contact:null,
            move:userService.getEmpyMove(),
            user:userService.getUser(),
            pastTransactions:null

        }

        async   componentDidMount () {
        await this.loadContactAndPastTransactions()

        
      }
    
  
      loadContactAndPastTransactions = async () =>{
         const {user} = this.state
        if(!this.props.match.params.id)return 
        const contact = await contactService.getContactById(this.props.match.params.id)

        this.setState({contact})
       const userTransactions=user.moves
      const pastTransactions =  userTransactions.filter(move => move.toId === contact._id)
      console.log('pastTransactions',pastTransactions);
      this.setState({pastTransactions})
      }


      updateContact = async (ev) =>{
ev.preventDefault()
        const { contact ,move } = this.state
       let currMove={
          toId:contact._id,
          to:contact.name,
          at:Date.now(),
          coins:move.coins
        }
        await contactService.saveContact({...contact})
        userService.handelFundsTransfer(currMove)
 
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
        this.setState(({ move }) => ({ move: { ...move, [field]: value } }))
    }
  render() {
    const { contact,pastTransactions } = this.state
    console.log('contact',contact);
    if(!contact)return (<div>Loaing...</div>)
    return (
      <>
        <section className='transfer-page-contianer'>

          <div className='transfer-contact-contianer'>
         <img src={`https://robohash.org/${contact.name}`}/>
          <p>Email <span className='details-info-email'>{contact.email}</span></p>
          <p>Phone numer <span className='details-info-phone'>{contact.phone}</span></p>
          </div>

          <form onSubmit={this.updateContact} className='transfer-form'>
            <p>Transfer Coins to {contact.name}</p>
            <label htmlFor='coins'>Amount
              <input onChange={this.handleChange} value={contact.coins} type='number' name="coins" id='coins' />
             </label>
            <button>Transfer</button>
          </form>

      <section className='moves-to-curr-contact'>
        <h2>All transactions from you to {contact.name}</h2>
        <ol>
          {pastTransactions&& pastTransactions.map(transaction => 
            <li  key={transaction._id}><span>transaction date {(transaction.at)}</span>{" "}<span>Amount {(transaction.coins)}</span></li>
                     )}
        </ol>
      </section>
        </section>
            </>
    )
  }
}
