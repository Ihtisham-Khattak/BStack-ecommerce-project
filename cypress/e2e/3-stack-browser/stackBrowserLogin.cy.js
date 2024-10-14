import Login from "../../pageobject/stackAuth/Login";
let loginFun = new Login();

describe("Browser Stack Login Functionality", () => {
  beforeEach(() => {
    cy.clearCookies({ log: true });
    cy.clearLocalStorage({ log: true });
    cy.visit("signin");
  });

  //UnSuccessful Login Functionality
  it("UnSuccessful Login", () => {
    loginFun.loginEmptyFunctionality();
  });

  //Successful Login Functionality
  it("Successful Login", () => {
    loginFun.loginFunctionality();
  });

  // Add to Cart List Functionality
  it.only("Add to Cart functionality", () => {
    loginFun.loginFunctionality();
    cy.xpath(
      "(//div[@class='shelf-item__buy-btn'][normalize-space()='Add to cart'])"
    ).each(($el, index, $list) => {
      if (index < 24) {
        cy.wrap($el).click();
        cy.log(index, $list);
        cy.get(".float-cart__close-btn").click();
      } else if (index == 24) {
        cy.wrap($el).click(); // Add the last item to cart
        cy.log(index, $list);
        cy.get(".buy-btn").click();
      }
    });
  });

  it("Category Checking", () => {
    //span[normalize-space()='OnePlus']
    //span[normalize-space()='Samsung']
    //span[normalize-space()='Apple']
    loginFun.loginFunctionality();
    cy.xpath("//span[normalize-space()='OnePlus']")
      .should("have.text", "OnePlus")
      .click();
  });
});
