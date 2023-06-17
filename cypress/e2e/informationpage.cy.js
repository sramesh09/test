describe("Sauce Demo Application", function () {
  const elements = {
    SWAG_LABEL_TITLE: ".app_logo",
    ADDCART_BUTTON: "div#inventory_container button",
    SHOPPING_CART: ".shopping_cart_link",
    CHECK_OUT_BUTTON: '[data-test="checkout"]',
    FIRST_NAME: '[data-test="firstName"]',
    LAST_NAME: '[data-test="lastName"]',
    POST_CODE: '[data-test="postalCode"]',
    CONTINUE_BUTTON: '[data-test="continue"]',
    CANCEL_BUTTON: '[data-test="cancel"]',
    ERROR_MESSAGE: 'div[class="error-message-container error"]',
    REMOVE_BUTTON: "div.inventory_item_description",
  };

  beforeEach(() => {
    cy.fixture("testaccounts").then(function (data) {
      this.data = data;
    });
    cy.fixture("products").then((products) => {
      globalThis.products = products;
    });
  });

  //validate information and continue
  it("validate information and continue ", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.title().should("eq", "Swag Labs");
    cy.get(elements.ADDCART_BUTTON).eq(0).click();
    cy.get(elements.SHOPPING_CART).click();
    cy.get(elements.CHECK_OUT_BUTTON).click();
    cy.get(elements.FIRST_NAME).click().type("test");
    cy.get(elements.LAST_NAME).click().type("test");
    cy.get(elements.POST_CODE).click().type("B90 7AE");
    cy.get(elements.CONTINUE_BUTTON).click();
    cy.url().should("eq", "https://www.saucedemo.com/checkout-step-two.html");
  });

  //validate information and cancel
  it("validate information and cancel ", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.title().should("eq", "Swag Labs");
    cy.get(elements.ADDCART_BUTTON).eq(0).click();
    cy.get(elements.SHOPPING_CART).click();
    cy.get(elements.CHECK_OUT_BUTTON).click();
    cy.get(elements.FIRST_NAME).click().type("test");
    cy.get(elements.LAST_NAME).click().type("test");
    cy.get(elements.POST_CODE).click().type("B90 7AE");
    cy.get(elements.CANCEL_BUTTON).click();
    cy.url().should("eq", "https://www.saucedemo.com/cart.html");
  });

  //  validate Error Message
  it("validate Error Message", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.title().should("eq", "Swag Labs");
    cy.get(elements.ADDCART_BUTTON).eq(0).click();
    cy.get(elements.SHOPPING_CART).click();
    cy.get(elements.CHECK_OUT_BUTTON).click();
    cy.get(elements.CONTINUE_BUTTON).click();
    cy.get(elements.ERROR_MESSAGE).contains("Error: First Name is required");
  });
});
