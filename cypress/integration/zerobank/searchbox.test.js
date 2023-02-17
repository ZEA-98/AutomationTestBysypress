/// <reference types= "cypress" />

describe("Searchbox Test", function () {
	before(() => {
		cy.visit("http://zero.webappsecurity.com/index.html")
	})

	it("Should type into searchbox and submit", () => {
		cy.get("#searchTerm").type("online {enter}")
	})

	it("Should show search result page", () => {
		cy.get("h2").should("contain.text", "Search Results:")
	})

	it("Should show result top offset", () => {
		cy.get(".top_offset").should(
			"contain.text",
			"The following pages were found for the query: online"
		)
	})

	it("Should click search result", () => {
		cy.get("a").contains("Zero - Free Access to Online Banking").click()
		cy.get("h1").contains("Online Banking")
	})
})
