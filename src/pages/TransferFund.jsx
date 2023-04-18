import React, { Component } from 'react'
import { contactService } from '../services/contact.service'
import { userService } from '../services/user.service'
import { MovesList } from '../components/MovesList'
import { loadloggedinUser, sepndBalance } from '../store/actions/user.actions'
import { handelFundsTransfer } from '../store/actions/contact.actions'
import { connect } from 'react-redux'

export  class _TransferFund extends Component {
        state = {
            contact:null,
            move:userService.getEmpyMove(),
            pastTransactions:null

        }

          componentDidMount () {
        this.loadContactAndPastTransactions()
      }

    
  
      loadContactAndPastTransactions = async () =>{
        if(!this.props.match.params.id)return 
        const contact = await contactService.getContactById(this.props.match.params.id)
        
        this.setState({contact})
        const user = this.props.loggdingUser
         const userTransactions=user.moves
      const pastTransactions =  userTransactions.filter(move => move.toId === contact._id)
      this.setState({pastTransactions})
      }


      saveContact = async (ev) =>{
          ev.preventDefault()
        const { contact ,move } = this.state
       let currMove={
          toId:contact._id,
          to:contact.name,
          at:Date.now(),
          coins:move.coins
        }
       await this.props.handelFundsTransfer(currMove,contact)
        await this.props.sepndBalance(currMove)
        this.loadContactAndPastTransactions()
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

          <form onSubmit={this.saveContact} className='transfer-form flex'>
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
const mapStateToProps = (state) =>({
  loggdingUser: state.userModule.loggdingUser

})
const mapDispatchToProps = {
  loadloggedinUser,
  handelFundsTransfer,
  sepndBalance,



}

export const TransferFund = connect(mapStateToProps,mapDispatchToProps)(_TransferFund)