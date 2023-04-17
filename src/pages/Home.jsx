import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { bitCoinService } from '../services/bitCoinService'
import { useHistory } from "react-router-dom";



export  class Home extends Component {

    state={
        user:null,
        currBitCoinRate:0,
        BitCoinMarketPrice:null
        

    }
    componentDidMount(){
        this.loadUser()
        this.loadBitCoinInfo()
       console.log('this.props',this.props.match.path)
  
    
    }
    loadUser = () =>{
     
      const user =userService.getUser()
      if(!user) this.redirect()

        this.setState({user})
    } 
   redirect= () => {
    this.props.history.push('/signup-page')
   } 
    loadBitCoinInfo = async () => {
        const currBitCoinRate = await bitCoinService.getRate()
        this.setState({currBitCoinRate})   
    }
 
  render() {
    const {user, currBitCoinRate}= this.state
    const img= "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png"
    return (

        <section className='greating-container flex'>
          <h1 className='greating'>Hello <span className='user-name'>{user?.name}</span></h1>
          <div className='slogan'>
             <h1 className='greating-title'>Be early to the future of finance</h1>
             <h2 className='greating-sub-title'>Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a platform trusted by millions.</h2>
      <h3> 
        <img  className="btc-symbol" src={img}/> 
        Exchange Rate: {currBitCoinRate} <span>(USD)</span>
      </h3>
          </div>
        </section>
    
    )
  }
}
