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
    MENU_BUTTON: 'div[class="bm-burger-button"]',
    ALL_ITEMS_LINK: "#inventory_sidebar_link",
    CART_ITEM_LIST: "div.cart_item",
    REMOVE_BUTTON: 'button[class="btn btn_secondary btn_small cart_button"]',
    CART_ITEM_LABEL: "div.cart_item_label",
    PRICE_BAR: "div.item_pricebar",
    PAYMENT_INFO: ".summary_value_label",
    SHIPPING_INFO: "div.summary_value_label",
    ITEM_TOTAL: "div.summary_subtotal_label",
    TAX: "div.summary_tax_label",
    TOTAL: "div.summary_total_label",
    CANCEL_BUTTON: '[data-test="cancel"]',
    FINISH_BUTTON: '[data-test="finish"]',
    THANKYOU: "h2.complete-header",
  };

  beforeEach(() => {
    cy.fixture("testaccounts").then(function (data) {
      this.data = data;
    });
    cy.fixture("products").then((products) => {
      globalThis.products = products;
    });
  });

  //  When in overview page Navigate to menu,add more products confirm the details
  it("Checkout one order", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.title().should("eq", "Swag Labs");
    cy.get(elements.ADDCART_BUTTON).eq(0).click();
    cy.get(elements.SHOPPING_CART).contains("1");
    cy.get(elements.SHOPPING_CART).click();
    cy.get(elements.CHECK_OUT_BUTTON).click();
    cy.get(elements.FIRST_NAME).click().type("test");
    cy.get(elements.LAST_NAME).click().type("test");
    cy.get(elements.POST_CODE).click().type("B90 7AE");
    cy.get(elements.CONTINUE_BUTTON).click();
    cy.get(elements.MENU_BUTTON).click();
    cy.get(elements.ALL_ITEMS_LINK).click();
    cy.get(elements.ADDCART_BUTTON).eq(1).click();
    cy.get(elements.ADDCART_BUTTON).eq(2).click();
    cy.get(elements.SHOPPING_CART).contains("3");
    cy.get(elements.SHOPPING_CART).click();
    cy.get(elements.CHECK_OUT_BUTTON).click();
    cy.get(elements.FIRST_NAME).click().type("test");
    cy.get(elements.LAST_NAME).click().type("test");
    cy.get(elements.POST_CODE).click().type("B90 7AE");
    cy.get(elements.CONTINUE_BUTTON).click();
    cy.get(elements.CART_ITEM_LIST).eq(0).contains("Sauce Labs Backpack");
    cy.get(elements.CART_ITEM_LIST).eq(1).contains("Sauce Labs Bike Light");
    cy.get(elements.CART_ITEM_LIST).eq(2).contains("Sauce Labs Bolt T-Shirt");
  });

  //When in overview page user click on shopping cart to remove products
  it("Checkout one order", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.title().should("eq", "Swag Labs");
    cy.get(elements.ADDCART_BUTTON).eq(0).click();
    cy.get(elements.ADDCART_BUTTON).eq(1).click();
    cy.get(elements.ADDCART_BUTTON).eq(2).click();
    cy.get(elements.SHOPPING_CART).click();
    cy.get(elements.CHECK_OUT_BUTTON).click();
    cy.get(elements.FIRST_NAME).click().type("test");
    cy.get(elements.LAST_NAME).click().type("test");
    cy.get(elements.POST_CODE).click().type("B90 7AE");
    cy.get(elements.CONTINUE_BUTTON).click();
    cy.get(elements.SHOPPING_CART).click();
    cy.get(elements.CHECK_OUT_BUTTON).click();
    cy.get(elements.FIRST_NAME).click().type("test");
    cy.get(elements.LAST_NAME).click().type("test");
    cy.get(elements.POST_CODE).click().type("B90 7AE");
    cy.get(elements.CONTINUE_BUTTON).click();
    cy.get(elements.CART_ITEM_LIST).eq(0).contains("Sauce Labs Backpack");
    cy.get(elements.CART_ITEM_LIST).eq(1).contains("Sauce Labs Bike Light");
    cy.get(elements.CART_ITEM_LIST).eq(2).contains("Sauce Labs Bolt T-Shirt");
    cy.get(elements.SHOPPING_CART).click();
    cy.get(elements.REMOVE_BUTTON).eq(0).click();
  });

  //Calculate the total amount

  it("Calcualte total amount ", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.title().should("eq", "Swag Labs");
    cy.get(elements.ADDCART_BUTTON).eq(0).click();
    cy.get(elements.ADDCART_BUTTON).eq(1).click();
    cy.get(elements.SHOPPING_CART).click();
    cy.get(elements.CHECK_OUT_BUTTON).click();
    cy.get(elements.FIRST_NAME).click().type("test");
    cy.get(elements.LAST_NAME).click().type("test");
    cy.get(elements.POST_CODE).click().type("B90 7AE");
    cy.get(elements.CONTINUE_BUTTON).click();
    cy.get(elements.CART_ITEM_LIST).eq(0).contains("Sauce Labs Backpack");
    cy.get(elements.CART_ITEM_LIST).eq(1).contains("Sauce Labs Bike Light");
    cy.get(elements.PRICE_BAR).eq(0).contains("29.99");
    cy.get(elements.PRICE_BAR).eq(0).contains("9.99");
    cy.get(elements.PAYMENT_INFO).contains("SauceCard #31337");
    cy.get(elements.ITEM_TOTAL).contains("39.98");
    cy.get(elements.TOTAL).contains("43.18");
    cy.get(elements.FINISH_BUTTON).click();
    cy.get(elements.THANKYOU).contains("Thank you for your order");
  });
  
   //Calculate the total amount
  it.only("Calcualte total amount", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.title().should("eq", "Swag Labs");
    cy.get(elements.ADDCART_BUTTON).eq(0).click();
    cy.get(elements.ADDCART_BUTTON).eq(1).click();
    cy.get(elements.SHOPPING_CART).click();
    cy.get(elements.CHECK_OUT_BUTTON).click();
    cy.get(elements.FIRST_NAME).click().type("test");
    cy.get(elements.LAST_NAME).click().type("test");
    cy.get(elements.POST_CODE).click().type("B90 7AE");
    cy.get(elements.CONTINUE_BUTTON).click();
    cy.get(elements.CART_ITEM_LIST).eq(0).contains("Sauce Labs Backpack");
    cy.get(elements.CART_ITEM_LIST).eq(1).contains("Sauce Labs Bike Light");
    cy.get(elements.PRICE_BAR).eq(0).contains("29.99");
    cy.get(elements.PRICE_BAR).eq(0).contains("9.99");
    let sum = 0;
    cy.get("div.item_pricebar").each(($ele) => {
      sum = sum +parseFloat($ele.text().replaceAll('$', ''));
      cy.log(sum)
    });
    cy.get("div.summary_tax_label")
      .invoke("text")
      .then((tax) => {
        sum = sum + parseFloat(tax.replaceAll("Tax: $", ""));
        cy.log(sum);
        cy.log(tax);
      });
    cy.get('[class="summary_info_label summary_total_label"]')
      .invoke("text")
      .then((total) => {
        expect(parseFloat(total.replaceAll("Total: $", ""))).to.equal(sum);
      });
  });
});
