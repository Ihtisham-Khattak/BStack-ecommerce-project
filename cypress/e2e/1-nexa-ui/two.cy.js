describe("Sauce", () => {
  before(() => {
    cy.visit("https://sauce-demo.myshopify.com/account/register");
  });

  it('Test Case Number 01', () => {
    cy.get('#customer_email').type('John').debug().should("have.text", "")
    cy.get(':nth-child(5) > #last_name').type('doe')
    cy.get(':nth-child(6) > #email').type('john18@gmail.com')
    cy.get(':nth-child(7) > #password').type('12345678')
    cy.get('.action_bottom > input').click()
  });
});
