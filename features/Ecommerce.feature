Feature: Ecommerce application
Scenario: placing the order
    Given a login to ecommerce application with "anshika@gmail.com" and "Iamking@000"
    When add "zara coat 3" to the cart
    Then verify the "zara coat 3" displayed in the cart
    When enter the valid details and place the order
    Then verify the order present in order history page
