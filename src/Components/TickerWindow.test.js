import React from 'react';
import TickerWindow from './TickerWindow'
import renderer from 'react-test-renderer';
import MoneyFormatter from '../Services/MoneyFormatter';
import PricingProvider from '../Services/PricingProvider';
import RandomNumberGenerator from '../Services/RandomNumberGenerator'
import QuoteModel from '../Models/QuoteModel'
import BidAskModel from '../Models/BidAskModel'
import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('TickerBox', () => {
    var randomNumberGenerator ;
    var pricingProvider ;
    var moneyFormatter;
    var quote;
    beforeEach(() => {
        randomNumberGenerator = new RandomNumberGenerator();
        randomNumberGenerator.GetRandomRange = jest.fn().mockReturnValue(123456);
        pricingProvider = new PricingProvider(randomNumberGenerator);
        moneyFormatter = new MoneyFormatter();
        quote = new QuoteModel();
        quote.Ticker = "EURUSD";
        quote.Bid = new BidAskModel();
        quote.Ask = new BidAskModel();
        quote.Bid.Value = 123456;
        quote.Ask.Value = 123456;
    })
    it('renders correctly', () => {
        const ticker = renderer
            .create(<TickerWindow  pricingProvider = {pricingProvider} moneyFormatter={moneyFormatter} />)
            .toJSON();
        expect(ticker).toMatchSnapshot();

    });


});