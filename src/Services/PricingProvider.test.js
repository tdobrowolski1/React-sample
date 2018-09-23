import PricingProvider from './PricingProvider';
import RandomNumberGenerator from './RandomNumberGenerator';

describe('PricingProvider', () => {
    let pricingProvider;
    let randomGenerator = new RandomNumberGenerator()
    beforeEach(() => {
        pricingProvider = new PricingProvider(randomGenerator);
        randomGenerator.GetRandomRange = jest.fn()
            .mockReturnValueOnce(10)
            .mockReturnValueOnce(15)
            .mockReturnValueOnce(10000)
            .mockReturnValueOnce(10000);

    })
    it('Retrieved bid ask are numbers', () => {

        let quote = pricingProvider.GetQuote("USDJPY");
        expect(Number.isNaN(quote.Bid.Value)).toBe(false);
        expect(Number.isNaN(quote.Ask.Value)).toBe(false);
    });
    it('Retrieves positive Numbers', () => {
        let unmockedRandom = new RandomNumberGenerator()
        let unmockedPricing = new PricingProvider(unmockedRandom);

        for (let i = 0; i < 500; i++) {
            let quote = unmockedPricing.GetQuote("USDJPY");
            expect(quote.Bid.Value).toBeGreaterThan(0);
            expect(quote.Ask.Value).toBeGreaterThan(0);
        }

    });

    //beloved randoms..
    it('retrieves bid lower than ask', () => {
        let unmockedRandom = new RandomNumberGenerator()
        let unmockedPricing = new PricingProvider(unmockedRandom);

        for (let i = 0; i < 500; i++) {
            let quote = unmockedPricing.GetQuote("USDJPY");
            expect(quote.Ask.Value).toBeGreaterThan(quote.Bid.Value);
        }
    });

    it('retrives the same pair that was quoted', () => {
        let quote = pricingProvider.GetQuote("USDJPY");
        expect(quote.Ticker).toBe("USDJPY");
        quote = pricingProvider.GetQuote("EURUSD");
        expect(quote.Ticker).toBe("EURUSD");
    });

    it('retrieves lot that is bigger than 0', () => {
        let unmockedRandom = new RandomNumberGenerator()
        let unmockedPricing = new PricingProvider(unmockedRandom);

        for (let i = 0; i < 500; i++) {
            let quote = unmockedPricing.GetQuote("USDJPY");
            expect(quote.Bid.Lot).toBeGreaterThan(0);
            expect(quote.Ask.Lot).toBeGreaterThan(0);
        }
    });
});