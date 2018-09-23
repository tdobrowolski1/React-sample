import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import QuoteModel from '../Models/QuoteModel'
import MoneyFormatter from '../Services/MoneyFormatter'
class PriceBox extends PureComponent {
    render() {
        const price = this.props.isAsk ? this.props.quote.Ask.Value : this.props.quote.Bid.Value;
        return (
            <div className={"PriceBox " + (this.props.isAsk ? 'ask' : 'bid')} onClick={(e) => this.props.onClickCallback(e,this.props.isAsk, this.props.quote)} >
                <div className={"PriceBoxHeader " + (this.props.isAsk ? 'floatRight' : 'floatLeft')}>
                    {this.props.quote.Ticker}
                </div>
                <div className={"PriceBoxHeader " + (this.props.isAsk ? 'floatLeft' : 'floatRight')}>
                    {this.props.moneyFormatter.FormatBeginPrice(this.props.quote.Ask.Value)}
                </div>
                <div className="PriceBoxBody">
                    <span className="mediumPrice"> {this.props.moneyFormatter.FormatMidPrice(price)}</span> <span className="smallPrice">{this.props.moneyFormatter.FormatEndPrice(price)}</span>
                </div>
            </div >
        );
    }
}
PriceBox.propTypes = {
    isAsk: PropTypes.bool,
    quote: PropTypes.instanceOf(QuoteModel),
    moneyFormatter : PropTypes.instanceOf(MoneyFormatter),
    onClickCallback : PropTypes.func,
}

export default PriceBox;
