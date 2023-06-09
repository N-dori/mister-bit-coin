import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { AppHeader } from './components/AppHeader';
import { AppFooter } from './components/AppFooter';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ContactIndex } from './pages/ContactIndex';
import { Charts } from './pages/Charts';
import { ContactDetailsPage } from './pages/ContactDetailsPage';
import { ContactEditPage } from './pages/ContactEditPage';
import {MarketPriceChart} from './pages/MarketPriceChart';
import { ConfirmedTransactions } from './pages/ConfirmedTransactions ';
import { SignupPage } from './pages/SignupPage';
import { TransferFund } from './pages/TransferFund';
import './assets/scss/main.scss';


import React, { Component } from 'react'
import { userService } from './services/user.service';

export default class App extends Component {

  render() {
   
    return (
      <Router>
           <section className="main-layout">
           <AppHeader  />
           
        <Switch>
      
        <Route path="/contact/edit/:id?" component={ContactEditPage} />
        <Route path="/contact/:id" component={ContactDetailsPage} />
        <Route path="/transfer-funds/:id" component={TransferFund} />
        <Route path="/contacts" component={ContactIndex} />
        <Route path="/charts/market-price" component={MarketPriceChart}/>
        <Route path="/charts/n-transactions" component={ConfirmedTransactions}/>
        <Route path="/charts/avg-block-size" component={ConfirmedTransactions}/>
        <Route path="/charts" component={Charts}/>
        <Route path="/about" component={About} />
        <Route path="/signup-page" component={SignupPage} />
        <Route path="/" component={Home} />
      
        </Switch>

       
          <AppFooter/>
        

    </section>
      </Router>
   
    )
  }
}
