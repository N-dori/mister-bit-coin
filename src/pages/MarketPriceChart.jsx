import React from 'react'
import {Chart} from '../components/Chart'
export  function MarketPriceChart() {
  return (
    <section className='my-chart' style={{gridColumn: 2}}>
         <h2 className='confirmed-title'>Market Price (USD)</h2>
    <h4 className='confirmed-sub-title'>The average USD market price across major bitcoin exchanges.</h4>
  
  <Chart />
  </section>
  )
}
