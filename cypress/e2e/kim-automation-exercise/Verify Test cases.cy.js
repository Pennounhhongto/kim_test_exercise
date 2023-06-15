const Homepage = require('./browserpag')
describe('test:7 Verify Test Cases Page', () => {
	beforeEach(() => {
		cy.visit('https://automationexercise.com')
	})
	it('Test go to Homepage ', () => {
		Homepage.goToHomePagreSuccess()
	})
	it('Test go to Test Cases pages', () => {
		Homepage.checkClickTestCaseBtn()
	})
})
