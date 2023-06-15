const Homepage = require('./browserpag')
describe('test10:Verify Test Cases Page', () => {
	beforeEach(() => {
		cy.visit('https://automationexercise.com')
		cy.fixture('mydata.json').as('data')
	})
	it('Test go to Homepage ', () => {
		Homepage.goToHomePagreSuccess()
	})
	it('Test Subscribed', function () {
		Homepage.haveSubscribtion()

		Homepage.inputSubscribeBox(this.data.email)
		Homepage.checkSubscribe()
	})
})
