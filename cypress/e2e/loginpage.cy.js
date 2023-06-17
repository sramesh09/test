//Feature: Sauce Demo app

describe("Sauce Demo Application", function () {
  const elements = {
    SWAG_LABEL_TITLE: ".app_logo",
    LOGIN_VALIDATION_MESSAGE: '[data-test="error"]',
    SAUCE_LAB_BACKPACK: ".inventory_item_name",
    MENU_BUTTON: 'div[class="bm-burger-button"]',
    ALL_ITEMS_LINK: "#inventory_sidebar_link",
    LOGOUT_LINK: "#logout_sidebar_link",
    ADDCART_BUTTON: 'button[class="btn btn_primary btn_small btn_inventory"]',
    REMOVE_BUTTON: 'button[class="btn btn_secondary btn_small btn_inventory"]',
    PRODUCTS_SUB_TITLE: 'span[class="title"]',
    SORT_SELECTOR: '[data-test="product_sort_container"]',
    SHOPPING_CART: ".shopping_cart_link",
  };

  beforeEach(() => {
    cy.fixture("testaccounts").then(function (data) {
      this.data = data;
    });
  });
  // Standard User Jounrney
  it("Standard user", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.get(elements.SWAG_LABEL_TITLE)
      .should("be.visible")
      .contains("Swag Labs");
  });

  // User cannot login using 'locked_out_user' username
  it("Locked out user", function () {
    cy.login(this.data.locked, this.data.Password);
    cy.get(elements.LOGIN_VALIDATION_MESSAGE).contains(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  // Invalid User name Jounrney
  it("Invlaid user", function () {
    cy.login(this.data.invaliduser, this.data.Password);
    cy.get(elements.LOGIN_VALIDATION_MESSAGE).contains(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  // Invalid pasword Jounrney
  it("Invalid Password", function () {
    cy.login(this.data.standard, this.data.invalidpassword);
    cy.get(elements.LOGIN_VALIDATION_MESSAGE).contains(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  // logout Jounrney
  it("logout", function () {
    cy.login(this.data.standard, this.data.Password);
    cy.get(elements.SWAG_LABEL_TITLE)
      .should("be.visible")
      .contains("Swag Labs");
    cy.get(elements.MENU_BUTTON).click();
    cy.get(elements.LOGOUT_LINK).click();
    cy.url().should("eq", "https://www.saucedemo.com/");
  });

  
});
