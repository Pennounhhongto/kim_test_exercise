class ViewproductPage {
	static name_box_selector = '#name'
	static email_box_selector = '#email'
	static review_box_selector = '#review'
	static submit_btn_selector = '#button-review'
	static inputAllName_Email(name, email) {
		cy.get(this.name_box_selector).type(name)
		cy.get(this.email_box_selector).type(email)
	}
	static inputReview(review) {
		cy.get(this.review_box_selector).type(review)
	}
	static checkSubmit() {
		cy.on('window:alert', str => {
			expect(str).to.equal('Thank you for your review.')
		})
		cy.get(this.submit_btn_selector).click()
	}
}
module.exports = ViewproductPage
