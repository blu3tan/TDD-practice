import { calculator } from './calculator';

describe('Calculator test', () => {
	const calculatorObject = calculator;
	const a = 3;
	const b = 5;

	it('The calculator has a sum method', () => {
		expect(calculatorObject).toHaveProperty('sum');
	});

	it('The calculator has a subtract method', () => {
		expect(calculatorObject).toHaveProperty('subtract');
	});

	it('The calculator has a multiply method', () => {
		expect(calculatorObject).toHaveProperty('multiply');
	});

	it('The calculator has a divide method', () => {
		expect(calculatorObject).toHaveProperty('divide');
	});

	it('Sum returns the sum of a + b', () => {
		expect(calculatorObject.sum(a, b)).toBe(8);
	});

	it('Subtract returns a - b', () => {
		expect(calculatorObject.subtract(a, b)).toBe(-2);
	});

	it('Divide returns a / b', () => {
		expect(calculatorObject.divide(a, b)).toBe(0.6);
	});

	it('Multiply returns a / b', () => {
		expect(calculatorObject.multiply(a, b)).toBe(15);
	});
});
