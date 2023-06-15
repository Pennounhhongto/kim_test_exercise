class Productpage {
	static product_btn_selector =
		'#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(2) > a'
	static allproduct_text_selector =
		'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > h2'
	static viewproduct_btn_selector =
		'body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > div:nth-child(4) > div > div.choose > ul > li > a'
	static writebox_selector =
		'body > section > div > div > div.col-sm-9.padding-right > div.category-tab.shop-details-tab > div.col-sm-12 > ul > li > a'
	static goToProductPage() {
		cy.get(this.product_btn_selector).click()
	}
	static checkGotoProdctpage() {
		cy.get(this.allproduct_text_selector).should('exist')
	}
	static gotoViewprodcut() {
		cy.get(this.viewproduct_btn_selector).click()
	}
	static gotoViewprodcutSuccess() {
		cy.get(this.writebox_selector).should('be.visible')
	}
}
module.exports = Productpage
