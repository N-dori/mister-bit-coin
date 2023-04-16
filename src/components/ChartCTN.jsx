import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { bitCoinService } from '../services/bitCoinService';

const data =bitCoinService.getConfirmedTransactions()

export   class ChartCTN extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="market-price" stroke="#8884d8" dot={false} />
          <Line type="monotone" dataKey="Confirmed Transactions" stroke="#82ca9d" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
