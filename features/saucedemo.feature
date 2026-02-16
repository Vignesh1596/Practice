Feature: SauceDemo Shopping Flow

    Scenario: Login, Add Product to Cart, and Verify in Cart
        Given I launch the application
        When I login with username "standard_user" and password "secret_sauce"
        And I add a product to the cart
        And I navigate to the cart page
        Then I should see the product in the cart
