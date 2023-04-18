import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import { userService } from '../services/user.service'
import { MovesList } from '../components/MovesList'

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
    const { contact, pastTransactions } = this.state
 console.log('pastTransactions in t',pastTransactions);
    if(!contact)return (<div>Loaing...</div>)
    return (
      <>
        <section className='transfer-page-contianer'>

          <div className='transfer-contact-contianer'>

            <div className='transfer-contact-info flex'>
              <div className='transfer-contact-img-container flex'>
         <img className='transfer-contact-img' src={`https://robohash.org/${contact.name}`}/>

              </div>
        <div className='transfer-contact-details flex'>
          <p>Email <span className='details-info-email'>{contact.email}</span></p>
          <p>Phone numer <span className='details-info-phone'>{contact.phone}</span></p>
        </div>
            </div>

          <form onSubmit={this.updateContact} className='transfer-form flex'>
            <h2>Transfer Coins to <span className='transfer-contact-name'>{contact.name}</span></h2>
            <label htmlFor='coins'>Amount to transfer
              <input onChange={this.handleChange} value={contact.coins} type='number' name="coins" id='coins' />
             </label>
            <button className="transfer-btn">Transfer</button>
          </form>

    
          </div>
      <MovesList contact={contact} pastTransactions={pastTransactions}/>
        </section>


            </>
    )
  }
}
