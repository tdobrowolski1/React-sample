import RandomNumberGenerator from './RandomNumberGenerator';

describe('RandomNumberGenerator', () => {
    let randomNumberGenerator;
    beforeEach(() => {
        randomNumberGenerator = new RandomNumberGenerator();
    })
    // as good as testing of randomness can get...
    it('generates number', () => {
        for (let i = 0; i < 500; i++) {
            let number = randomNumberGenerator.GetRandomRange(0, 50);
            expect(Number.isNaN(number)).toBe(false);
        }
    });
    it('generates number in range', () => {
        for (let i = 0; i < 500; i++) {
            let number = randomNumberGenerator.GetRandomRange(0, 20);
            expect(number).toBeLessThanOrEqual(50);
            expect(number).toBeGreaterThanOrEqual(0);
        }
    });
    it('generates integers', () => {
        for (let i = 0; i < 500; i++) {
            let number = randomNumberGenerator.GetRandomRange(0, 50);
            expect(Number.isInteger(number)).toBe(true);
        }
    });
});