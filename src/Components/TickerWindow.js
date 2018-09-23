import React, { PureComponent } from 'react';
import PricingProvider from '../Services/PricingProvider';
import PropTypes from 'prop-types';
import MoneyFormatter from '../Services/MoneyFormatter';
import PriceBox from '../Components/PriceBox';
import '../App.css';
class TickerWindow extends PureComponent {
    componentDidMount = () => {
        setInterval(() => {
            this.setState({ Quote: this.props.pricingProvider.GetQuote(this.state.Ticker) })
        }, 500);
    }
    constructor(props) {
        super(props);
        this.state = { Quote: this.props.pricingProvider.GetQuote("EURUSD"), Ticker: "EURUSD", Lot: 5 };
    }
    handleOrder = (e, isAsk, quote) => {
        let message = `You ${isAsk ? 'bought' : 'sold'} ${this.state.Lot} ${quote.Ticker}`
        alert(message)
    }
    LotChange(e) {
        if (e.target.value !== "") {
            this.setState({ Lot: e.target.value });
        }

    }

    PairChange(e) {
        this.setState({Ticker : e.target.value});
    }
    render() {
        return (
            <div className="TickerWindow">
                <div className="TickerHeader">
                </div>
                <div> <select onChange={this.PairChange.bind(this)}><option value="EURUSD">EUR/USD</option><option value="GBPUSD">GBP/USD</option><option value="CHFUSD">CHF/USD</option></select></div>
                <div className="PriceBoxContainer">
                    <PriceBox isAsk={false} quote={this.state.Quote} moneyFormatter={this.props.moneyFormatter} onClickCallback={this.handleOrder} />
                </div>
                <div className="PriceBoxContainer">
                    <PriceBox isAsk={true} quote={this.state.Quote} moneyFormatter={this.props.moneyFormatter} onClickCallback={this.handleOrder} />
                </div>
                <div><input type="number" id="lot" value={this.state.Lot} onChange={this.LotChange.bind(this)} ></input></div>
            </div>
        );
    }
}
TickerWindow.propTypes = {
    moneyFormatter : PropTypes.instanceOf(MoneyFormatter),
    pricingProvider : PropTypes.instanceOf(PricingProvider)
}

export default TickerWindow;
