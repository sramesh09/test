describe("Sauce Demo Application", function () {
  const elements = {
    SWAG_LABEL_TITLE: ".app_logo",
    LOGIN_VALIDATION_MESSAGE: '[data-test="error"]',
    ADDCART_BUTTON: "div#inventory_container button",
    REMOVE_BUTTON: "div.inventory_item_description",
    PRODUCTS_SUB_TITLE: 'span[class="title"]',
    SORT_SELECTOR: '[data-test="product_sort_container"]',
    SHOPPING_CART: ".shopping_cart_link",
    CART_ITEM: "div.cart_item",
    CART_LABEL: "div.cart_item_label",
    CART_QUANTITY: "div.cart_quantity",
    CONTINUE_SHOPPING: '[data-test="continue-shopping"]',
    CHECK_OUT_BUTTON: '[data-test="checkout"]',
  };

  beforeEach(() => {
    cy.fixture("testaccounts").then(function (data) {
      this.data = data;
    });
    cy.fixture("products").then((products) => {
      globalThis.products = products;
    });
  });

  // Validate the sort filter scenario
  it("validate drop down", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.title().should("eq", "Swag Labs");
    cy.get(elements.SORT_SELECTOR).select("Price (high to low)");
  });

  // Add to cart one item and check remove button is enabled
  it("Checkout one order", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.title().should("eq", "Swag Labs");
    let item0 = products.Inventory.Item.SauceLabsBackpack;
    let index0 = 0;
    cy.checkItems(index0, item0);
    cy.get(elements.ADDCART_BUTTON).eq(0).click();
    cy.get(elements.SHOPPING_CART).contains("1");
    cy.get(elements.REMOVE_BUTTON).eq(0).should("be.visible");
  });

  // Add to cart three items and check remove button is enabled
  it("Checkout three orders", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.title().should("eq", "Swag Labs");
    cy.get(elements.ADDCART_BUTTON).eq(0).click();
    cy.get(elements.ADDCART_BUTTON).eq(3).click();
    cy.get(elements.ADDCART_BUTTON).eq(5).click();
    cy.get(elements.SHOPPING_CART).contains("3");
    cy.get(elements.REMOVE_BUTTON)
      .eq(0)
      .should("be.visible")
      .contains("Remove");
    cy.get(elements.REMOVE_BUTTON)
      .eq(3)
      .should("be.visible")
      .contains("Remove");
    cy.get(elements.REMOVE_BUTTON)
      .eq(5)
      .should("be.visible")
      .contains("Remove");
  });

  // Check out  deatils are displayed correctly
  it("Checkout details for one item  ", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.title().should("eq", "Swag Labs");
    cy.get(elements.ADDCART_BUTTON).eq(0).click();
    cy.get(elements.SHOPPING_CART).click({ force: true });
    cy.get(elements.CART_ITEM)
      .eq(0)
      .should("be.visible")
      .contains("Sauce Labs Backpack");
    cy.get(elements.CART_ITEM).eq(0).should("be.visible").contains("29.99");
    cy.get(elements.CART_QUANTITY).eq(0).should("be.visible").contains("1");
  });

  //Validate checkout button
  it("validate checkout button  ", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.title().should("eq", "Swag Labs");
    cy.get(elements.ADDCART_BUTTON).eq(0).click();
    cy.get(elements.SHOPPING_CART).click({ force: true });
    cy.get(elements.CART_ITEM)
      .eq(0)
      .should("be.visible")
      .contains("Sauce Labs Backpack");
    cy.get(elements.CART_ITEM).eq(0).should("be.visible").contains("29.99");
    cy.get(elements.CART_QUANTITY).eq(0).should("be.visible").contains("1");
    cy.get(elements.CHECK_OUT_BUTTON).click();
    cy.url().should("eq", "https://www.saucedemo.com/checkout-step-one.html");
  });
  //Validate continue shopping button

  it("validate continue shopping button", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.title().should("eq", "Swag Labs");
    cy.get(elements.ADDCART_BUTTON).eq(0).click();
    cy.get(elements.SHOPPING_CART).click();
    cy.get(elements.CONTINUE_SHOPPING).click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  //Validate cart quantity is displayed correctly
  it("Cart quantity is displayed correctly", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.title().should("eq", "Swag Labs");
    cy.get(elements.ADDCART_BUTTON).eq(0).click();
    cy.get(elements.SHOPPING_CART).click();
    cy.get(elements.CART_ITEM)
      .eq(0)
      .should("be.visible")
      .contains("Sauce Labs Backpack");
    cy.get(elements.CART_ITEM).eq(0).should("be.visible").contains("29.99");
    cy.get(elements.CART_QUANTITY).eq(0).should("be.visible").contains("1");
  });
});
