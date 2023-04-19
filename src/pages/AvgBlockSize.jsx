import React from 'react'
import {Chart} from '../components/Chart'
export  function MarketPriceChart() {
  return (
    <section className='my-chart' style={{gridColumn: 2}}>
         <h2 className='confirmed-title'>Average Block Size (MB)</h2>
    <h4 className='confirmed-sub-title'>The average block size over the past 24 hours in megabytes.</h4>
  
  <Chart />
  </section>
  )
}