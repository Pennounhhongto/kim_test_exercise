class Cart {
	static subscribe_text_selector =
		'#footer > div.footer-widget > div > div > div.col-sm-3.col-sm-offset-1 > div > h2'
	static suscribe_box_selector = '#susbscribe_email'
	static subscribe_btn_selector = '#subscribe'
	static haveSubscribtion() {
		cy.get(this.subscribe_text_selector).should('be.visible')
	}
	static inputSubscribeBox(email) {
		cy.get(this.suscribe_box_selector).type(email)
	}
	static checkSubscribe() {
		cy.on('window:alert', str => {
			expect(str).to.equal('You have been successfully subscribed!')
		})
		cy.get(this.subscribe_btn_selector).click()
	}
}
module.exports = Cart
