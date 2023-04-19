import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { bitCoinService } from '../services/bitCoinService'
import { MovesList } from '../components/MovesList'
import { connect } from 'react-redux'
import { loadloggedinUser } from '../store/actions/user.actions'



export  class _Home extends Component {

    state={
        currBitCoinRate:0,
        BitCoinMarketPrice:null
    }

    async componentDidMount(){
      console.log("this.props",this.props);
    await this.props.loadloggedinUser()

     if(!this.props.loggdingUser)this.redirect()
        this.loadBitCoinInfo()

    }

 

    
    redirect= () => {
    this.props.history.push('/signup-page')
  } 
  
  loadBitCoinInfo = async () => {
    const currBitCoinRate = await bitCoinService.getRate()
    this.setState({currBitCoinRate})   
  }
  
  render() {
    const { currBitCoinRate}= this.state
    
    if(!this.props.loggdingUser)return

    const { moves ,name ,coins} =this.props?.loggdingUser

    const nthMoves=moves.slice(0,3)
    console.log('moves',moves);
    console.log('nthMoves',nthMoves);
    const img= "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png"
    return (

        <section className='greating-container flex'>
          <h1 className='greating'>Hello <span className='user-name'>{name}</span></h1>
          <div className='slogan'>
             <h1 className='greating-title'>Be early to the future of finance</h1>
             <h2 className='greating-sub-title'>Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a platform trusted by millions.</h2>
      <h3> 
        <img  className="btc-symbol" src={img}/> 
        Exchange Rate: {currBitCoinRate} <span>(USD)</span>
      </h3>
          </div>
          <section className='digtal-wallet flex'>
          <header className='digtal-wallet-img-container flex'>
            <img src="https://freeiconshop.com/wp-content/uploads/edd/wallet-outline.png"/>
          <span>BTC  {coins}</span>
            <span>Digital Wallt</span>
          </header>
       {
        (moves.length === 0) ? <span className='no-transactions' > 'No Transactions made yet...' </span>:
       <MovesList isHome={true} pastTransactions={nthMoves} contact={this.props?.loggdingUser}/>
       } 
          </section>

     </section>
    )
  }
}
const mapStateToProps = (state) =>({
  loggdingUser: state.userModule.loggdingUser
})
const mapDispatchToProps = {
  loadloggedinUser


}

export const Home = connect(mapStateToProps,mapDispatchToProps)(_Home)
