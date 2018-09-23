import React from 'react';
import PriceBox from './PriceBox'
import renderer from 'react-test-renderer';
import MoneyFormatter from '../Services/MoneyFormatter';
import QuoteModel from '../Models/QuoteModel'
import BidAskModel from '../Models/BidAskModel'
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



describe('PriceBox', () => {
    var onClickCallback;
    var moneyFormatter;
    var quote;
    beforeEach(() => {
        onClickCallback = jest.fn();
        moneyFormatter = new MoneyFormatter();
        quote = new QuoteModel();
        quote.Ticker = "EURUSD";
        quote.Bid = new BidAskModel();
        quote.Ask = new BidAskModel();
        quote.Bid.Value = 123456;
        quote.Ask.Value = 123456;
    })
    it('renders correctly', () => {
        const ask = renderer
            .create(<PriceBox onClickCallback={onClickCallback} quote={quote} moneyFormatter={moneyFormatter} isAsk={true} />)
            .toJSON();
        expect(ask).toMatchSnapshot();
        const bid = renderer
            .create(<PriceBox onClickCallback={onClickCallback} quote={quote} moneyFormatter={moneyFormatter} isAsk={false} />)
            .toJSON();
        expect(bid).toMatchSnapshot();
    });
    it('invokes callback when clicked on', () => {
        const priceBox = shallow(<PriceBox onClickCallback={onClickCallback} quote={quote} moneyFormatter={moneyFormatter} isAsk={false} />);
        priceBox.find('.PriceBox').simulate('click');
        expect(onClickCallback).toBeCalled();
    });

});