import MoneyFormatter from './MoneyFormatter';

describe('MoneyFormatter', () => {
    let moneyFormatter = new MoneyFormatter();

    it('displays floating point for first 3 characters', () => {

        var formatted = moneyFormatter.FormatBeginPrice(123456);
        expect(formatted).toBe("1.23")
    });
    it('computes valid mid point price', () => {

        var formatted = moneyFormatter.FormatMidPrice(123456);
        expect(formatted).toBe("45");
    });
    it('computes valid end point price', () => {

        var formatted = moneyFormatter.FormatEndPrice(123456);
        expect(formatted).toBe("6");
    });
});