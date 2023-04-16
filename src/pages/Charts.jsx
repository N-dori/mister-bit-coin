import React, { Component } from 'react'
import {ChartCTN} from '../components/ChartCTN'
import {Chart} from '../components/Chart'

export  class Charts extends Component {
  componentDidMount(){
    console.log('Charts on air',)
  }
  render() {
    return (
      <>
          <section className='charts-container' >
        <header className='charts-header'><h1>Charts</h1></header>
     </section>
     <section className='my-chart' style={{gridColumn: 2}}>
          <h1> BTC Average price</h1>
        <Chart />

        </section>
        <section className='confirmed-tens-chart-conatiner'>
          <h2>Confirmed Transactions Per Day</h2>
          <h4>The total number of confirmed transactions per day.</h4>
          <ChartCTN/>
          <h2>Explanation</h2>
          <p>The number of daily confirmed transactions highlights the value of the
             Bitcoin network as a way to securely transfer funds without a third part.</p>
        </section>
      </>
 
    )
  }
}
