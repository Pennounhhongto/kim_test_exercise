class Hompage {
	static url = 'https://automationexercise.com'
	static testCase_btn_selector =
		'#slider-carousel > div > div.item.active > div:nth-child(1) > a.test_cases_list > button'
	static testCase_text_selector = '#form > div > div.row > div > h2 > b'
	static subscribe_selector = '#susbscribe_email'
	static subscribe_text_selector =
		'#footer > div.footer-widget > div > div.row > div.col-sm-3.col-sm-offset-1 > div > h2'
	static subscribe_enter_selector = '#subscribe'
	static reccommend_selector =
		'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div.recommended_items > h2'
	static Addtocart_selector =
		'#recommended-item-carousel > div > div.item.active > div:nth-child(1) > div > div > div > a'
	static cart_btn_selector =
		'#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(3) > a'
	static viewcart_selector =
		'#cartModal > div > div > div.modal-body > p:nth-child(2) > a > u'

	static producrinCart_selector = '#product-4 > td.cart_description > h4 > a'
	static goToHomePagreSuccess() {
		cy.get(this.testCase_btn_selector).should('exist')
	}
	static checkClickTestCaseBtn() {
		cy.get(this.testCase_btn_selector).click()
		cy.url().should('equals', 'https://automationexercise.com/test_cases')
		cy.get(this.testCase_text_selector).should('exist')
	}
	static haveSubscribtion() {
		cy.get(this.subscribe_text_selector).should('be.visible')
	}
	static inputSubscribeBox(email) {
		cy.get(this.subscribe_selector).type(email)
	}
	static checkSubscribe() {
		cy.on('window:alert', str => {
			expect(str).to.equal('You have been successfully subscribed!')
		})
		cy.get(this.subscribe_enter_selector).click()
	}
	static checkRecommenVisible() {
		cy.get(this.reccommend_selector).should('be.visible')
	}
	static AddtoCart() {
		cy.get(this.Addtocart_selector).click()
		cy.get(this.viewcart_selector).should('be.visible')
	}
	static viewCart() {
		cy.get(this.Addtocart_selector).click()
		cy.get(this.viewcart_selector).click()
		cy.get(this.producrinCart_selector).should('be.visible')
	}
	static intoCart() {
		cy.get(this.cart_btn_selector).click()
	}
}
module.exports = Hompage
