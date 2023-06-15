const Homepage = require('./browserpag')
describe('tes:22 add to cart from recomend', () => {
	beforeEach(() => {
		cy.visit('https://automationexercise.com')
	})
	it('Test recoommend visible ', () => {
		Homepage.checkRecommenVisible()
	})
	it('Test Add to Cart', () => {
		Homepage.AddtoCart()
	})
	it('Test product in cart ', () => {
		Homepage.viewCart()
	})
})
