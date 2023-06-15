const ProductPage = require('../kim-automation-exercise/ProductPage')
const ViewProductPage = require('../kim-automation-exercise/View product page')
describe('Test:21 Verify Test Cases Page', () => {
	beforeEach(() => {
		cy.fixture('mydata.json').as('data')
		cy.visit('https://automationexercise.com')
		ProductPage.goToProductPage()
	})
	it('Test go to prodcut page ', () => {
		ProductPage.checkGotoProdctpage()
	})
	it('test go to view product page', () => {
		ProductPage.gotoViewprodcut()
		ProductPage.gotoViewprodcutSuccess()
	})
	it.only('Add review', function () {
		ProductPage.gotoViewprodcut()
		//ViewProductPage.inputAllName_Email('kim', 'kim@email.com')
		ViewProductPage.inputAllName_Email(this.data.username, this.data.email)
		ViewProductPage.inputReview('good')
		ViewProductPage.checkSubmit()
	})
})
