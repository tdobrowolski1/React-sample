import React, {  PureComponent } from 'react';
import TickerWindow from './Components/TickerWindow'
import RandomNumberGenerator from './Services/RandomNumberGenerator';
import MoneyFormatter from './Services/MoneyFormatter';
import PricingProvider from './Services/PricingProvider';
import './App.css';
// need some injection / hoc system
const randomGenerator = new RandomNumberGenerator();
const pricingProvider = new PricingProvider(randomGenerator);
const moneyFormatter = new MoneyFormatter();
class App extends PureComponent {
  render() {
    return (
      <TickerWindow randomGenerator={randomGenerator} pricingProvider= {pricingProvider} moneyFormatter={moneyFormatter}/>
    );
  }
}

export default App;
