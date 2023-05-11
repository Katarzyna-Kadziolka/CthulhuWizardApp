Feature: HomePage
    
Scenario: Click Create Investigator button
    Given the user is on the HomePage    
    When the user click button with text Create investigator
    Then the user should be redirected to WizardPage
