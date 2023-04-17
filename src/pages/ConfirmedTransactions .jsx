import React from 'react'
import {ChartCTN} from '../components/ChartCTN'
export  function ConfirmedTransactions () {
  return (
  <>
  
    <section className='confirmed-chart-conatiner'>
    <h2 className='confirmed-title'>Confirmed Transactions Per Day</h2>
    <h4 className='confirmed-sub-title'>The total number of confirmed transactions per day.</h4>
    <ChartCTN/>
  </section>
  <section className='confirmed-explanation-con'>
    <h2 className='confirmed-explanation'>Explanation</h2>
    <p className='confirmed-txt'>The number of daily confirmed transactions highlights the value of the
       Bitcoin network as a way to securely transfer funds without a third part.</p>

  </section>
  
  </>
  )
}
