const Homepage = require('./browserpag')
const Cartpage = require('../kim-automation-exercise/cartPage')
describe('test10:Verify Test Cases Page', () => {
	beforeEach(() => {
		cy.visit('https://automationexercise.com')
		cy.fixture('mydata.json').as('data')
	})
	it('Test go to Homepage ', () => {
		Homepage.goToHomePagreSuccess()
	})

	it('Test go to Cart check suscribe ', () => {
		Homepage.intoCart()
		Cartpage.haveSubscribtion
	})

	it('Test Subscribed', function () {
		Homepage.intoCart()
		Cartpage.inputSubscribeBox(this.data.email)
		Cartpage.checkSubscribe()
	})
})
