/// <reference types= "cypress"/>

describe("Navbar test", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com/index.html");
    cy.url().should("include", "index.html");
  });

  it("Should display online banking content ", () => {
    cy.get("#onlineBankingMenu").click();
    cy.url().should("include", "online-banking.html");
    cy.get(".span6").should("be.visible");
  });

  it("Should display feedback content ", () => {
    cy.get("#feedback").click();
    cy.contains("Feedback").should("be.visible");
  });

  it("Should display home page content", () => {
    cy.contains("Zero Bank").click();
    cy.get("strong").should("contain.text", "Home");
  });
});
