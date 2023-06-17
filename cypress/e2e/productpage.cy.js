//cy.get(elements.).should('be.visible').contains('')

describe("Sauce Demo Application", function () {
    const elements = {
    SWAG_LABEL_TITLE: '.app_logo',
    LOGIN_VALIDATION_MESSAGE: '[data-test="error"]',
    ADDCART_BUTTON: 'button[class="btn btn_primary btn_small btn_inventory"]',
    REMOVE_BUTTON: 'button[class="btn btn_secondary btn_small btn_inventory"]',   
    PRODUCTS_SUB_TITLE: 'span[class="title"]',
    SORT_SELECTOR: '[data-test="product_sort_container"]',
    SHOPPING_CART: '.shopping_cart_link',
    MENU_BUTTON:'div[class="bm-burger-button"]',
    ALL_ITEMS_LINK:'#inventory_sidebar_link',
    LOGOUT_LINK: '#logout_sidebar_link',
    ABOUT_LINK: '#about_sidebar_link',
    RESET_APP_LINK: '#reset_sidebar_link'
    };
  
    beforeEach(() => {
        cy.fixture('testaccounts').then(function (data) {
          this.data = data
        })
        cy.fixture('products').then(products => {
          globalThis.products = products
        });
      })
   
  
    it("Check Product Main Page ",function () {
        cy.login(this.data.standard, this.data.Password)
        cy.title().should('eq','Swag Labs')
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        cy.get(elements.PRODUCTS_SUB_TITLE).should('be.visible').contains('Products')
        cy.get(elements.SORT_SELECTOR).should('be.visible')
        cy.get(elements.SHOPPING_CART).should('be.visible')  
        cy.get(elements.MENU_BUTTON).click()
        cy.get(elements.ABOUT_LINK).should('be.visible')
        cy.get(elements.ALL_ITEMS_LINK).should('be.visible')
        cy.get(elements.RESET_APP_LINK).should('be.visible')
        cy.get(elements.LOGOUT_LINK).click()
        cy.url().should('eq','https://www.saucedemo.com/');  
    });

    it("Check Inventory items 1 ",function () {
      cy.login(this.data.standard, this.data.Password)
      let item0 = products.Inventory.Item.SauceLabsBackpack
      let index0 =0;
     cy.checkItems(index0, item0)

      });

      it("Check Inventory items 2 ",function () {
        cy.login(this.data.standard, this.data.Password)
        let item1 = products.Inventory.Item.SauceLabsBikeLight
        let index1 =1;
       cy.checkItems(index1, item1)
        });

        it("Check Inventory items 3 ",function () {
          cy.login(this.data.standard, this.data.Password)
          let item2 = products.Inventory.Item.SauceLabsBoltTShirt
          let index2 =2;
         cy.checkItems(index2, item2)
          });

          it("Check Inventory items 4 ",function () {
            cy.login(this.data.standard, this.data.Password)
            let item3 = products.Inventory.Item.SauceLabsFleeceJacket
            let index3 =3;
           cy.checkItems(index3, item3)
            });

        it("Check Inventory items 5 ",function () {
            cy.login(this.data.standard, this.data.Password)
            let item4 = products.Inventory.Item.SauceLabsOnesie
            let index4 =4;
           cy.checkItems(index4, item4)
            })

            it("Check Inventory items 6 ",function () {
              cy.login(this.data.standard, this.data.Password)
              let item5 = products.Inventory.Item.TestallTheThings
              let index5 =5;
             cy.checkItems(index5, item5)
              })




})
  