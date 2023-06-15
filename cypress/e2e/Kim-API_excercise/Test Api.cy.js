describe(' test:4 PUT To All Brands List', () => {
	it('test:4  PUT To All Brands List', () => {
		cy.request({
			method: 'PUT',
			url: 'https://automationexercise.com/api/brandsList',
			failOnStatusCode: false,
			body: { id: 2, brand: 'CHANEL' },
		}).then(response => {
			expect(response.body.responseCode).to.eq(405)
			expect(response.body.message).to.eq(
				'This request method is not supported.'
			)
		})
	})
})
describe(' test:5 Post to seach product ', () => {
	it('  seach product', () => {
		cy.request({
			method: 'POST',
			url: ' https://automationexercise.com/api/searchProduct',
			headers: { 'Content-Type': 'application/json' },
			form: true,
			body: { search_product: 'jean' },
		}).as('response')
		cy.get('@response')
			.its('body')
			.then(data => {
				expect(JSON.parse(data).responseCode).to.eq(200)
				expect(JSON.parse(data).products.id).to.eq(33)

				//cy.get(JSON.parse(data).products).then(pro => {
				//expect(products.id).to.eq(33)
				//})
			})
		//cy.log()
		//cy.get.its('body.responseCode').should('equals', 200)
		//expect(response.body.search_product).to.eq('jean')
	})
})

describe(' test:6 Post to seach product without seach parameter', () => {
	it('  seach product without seach parameter', () => {
		cy.request({
			method: 'POST',
			url: 'https://automationexercise.com/api/searchProduct',
			failOnStatusCode: false,
			body: {},
		}).then(response => {
			expect(response.body.responseCode).to.eq(400)
			expect(response.body.message).to.eq(
				'Bad request, search_product parameter is missing in POST request.'
			)
		})
	})
})
describe(' test:8 POST To Verify Login without email parameter', () => {
	it(' POST To Verify Login without email parameter', () => {
		cy.request({
			method: 'POST',
			url: 'https://automationexercise.com/api/verifyLogin',

			failOnStatusCode: false,
			body: {
				password: 'this',
			},
		}).then(response => {
			expect(response.status).to.eq(200)
			expect(response.body.responseCode).to.eq(400)
			expect(response.body.message).to.eq(
				'Bad request, email or password parameter is missing in POST request.'
			)
		})
	})
})

describe(' test:9 DELETE To Verify Login', () => {
	it('  DELETE To Verify Login', () => {
		cy.request({
			method: 'DELETE',
			url: ' https://automationexercise.com/api/verifyLogin',
			failOnStatusCode: false,
			body: {},
		}).then(response => {
			expect(response.body.responseCode).to.eq(405)
			expect(response.body.message).to.eq(
				'This request method is not supported.'
			)
		})
	})
})
