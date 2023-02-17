/// <reference types = "cypress" />

describe("Login / Logout Test", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com/index.html");
    cy.url().should("include", "index.html");
    cy.get("#signin_button").click();
  });

  it("Should Try To Login With Invalid Data", () => {
    cy.get("#login_form").should("be.visible");
    cy.get("#user_login").type("invalid username");
    cy.get("#user_password").type("invalid password");
    cy.contains("Sign in").click();
  });

  it("Should Display Error Message", () => {
    cy.get(".alert-error").should("be.visible").and("contain.text", "Login and/or password are wrong.");
  });

  it("Should Try To Login With Valid Data", () => {
    const username = "username";
    const password = "password";

    cy.login(username, password);

    cy.get("h2").should("contain.text", "Cash Accounts");
  });

  it("Should Logout From The Application ", () => {
    cy.contains("username").click();
    cy.get("#logout_link").click();

    cy.get("strong").should("contain.text", "Home");
  });
});
