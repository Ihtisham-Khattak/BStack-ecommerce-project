import Login from "../../pageobject/stackAuth/Login";
let loginFun = new Login();

describe("Browser Stack Login Functionality", () => {
  beforeEach(() => {
    cy.clearCookies({ log: true });
    cy.clearLocalStorage({ log: true });
    cy.visit("/");
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
      cy.wrap($el).click();
      cy.log(index, $list);
      cy.get(".float-cart__close-btn").click();
    });

    cy.xpath("//div[@class, 'bag bag--float-cart-closed']").click()
  });
});
