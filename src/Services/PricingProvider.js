import QuoteModel from '../Models/QuoteModel'
import BidAskModel from '../Models/BidAskModel'
class PricingProvider {
    constructor(randomGenerator) {
        // could use some interfacing/ injection / Hoc (depending on pattern adopted) 
        this.randomGenerator = randomGenerator;
    }

    GetQuote(ticker) {
        let quote = new QuoteModel();
        quote.Bid = new BidAskModel()
        quote.Ask = new BidAskModel();
        quote.Ticker = ticker;
        quote.Bid.Value = this.randomGenerator.GetRandomRange(140000, 160000);
        quote.Bid.Lot = this.randomGenerator.GetRandomRange(1, 100);
        quote.Ask.Value =  this.randomGenerator.GetRandomRange(quote.Bid.Value + 1, quote.Bid.Value + 100);
        quote.Ask.Lot = this.randomGenerator.GetRandomRange(1, 100);
        return quote;
    }
}

export default PricingProvider;