import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'


export  class Charts extends Component {
  componentDidMount(){
    console.log('Charts on air',)
  }
  render() {
    return (
      <>
          <section className='charts-container' >
        <header className='charts-header'>
          <h1 className='charts-header-title'>Blockchain Charts</h1>
          <p className='charts-header-sub-title'>The most trusted source for data on the bitcoin blockchain</p>
        </header>
 
     <section  className='chart-links-container'>

      <section className='chart-links-title'>
        <p className='chart-links-title'>Popular Stats</p>
        </section>
        <section className='chart-link-inner-container'>
        <Link className="chart-link" to={`/charts/market-price`}>
           <article className='chart-link-container'>
        <h2  className='chart-link-price-title'>Market Price (USD)</h2>
        <span className='btc-to-dollar'>$29,464</span>
        <span className='btc-desc'>(USD)</span>
        <p className='btc-desc-p'>The averge USD market price across major bitcoin exchanges</p>
      </article>

        </Link>
        <Link className="chart-link" to={`/charts/n-transactions`}>
      <article className='chart-link-container'>
        <h2 className='chart-link-price-title' >Confirmed Transactions Per Day</h2>
        <span className='btc-to-dollar'>291,659</span>
        <span className='btc-desc'>Transactions</span>
        <p className='btc-desc-p'>The total number of confirmed transactions per day.</p>
      </article>
      </Link>
        </section>
     </section>
    </section>
  
      </>
 
    )
  }
}
