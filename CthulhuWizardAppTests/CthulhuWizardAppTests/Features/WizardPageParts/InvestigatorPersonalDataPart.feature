Feature: InvestigatorPersonalDataPart
  
  Scenario: Disable Next button when Name input is empty
    Given the user is on the WizardPage 
    And the user is on Investigator Personal Data Step
    When Name input is empty
    Then Next button is disabled
    And empty Name error message is visible

    
#  Scenario: Disable Next button when Age input is invalid
#    Given the following ages:
#      |age|message                                |
#      |   |Age cannot be empty                    |
#      |10 |age must be greater than or equal to 15|
#      |100|age must be less than or equal to 90   |
#    And the user is on the Wizard Page
#    And the user is on Investigator Personal Data Step
#    When Age input is invalid
#    Then Next button is disabled
#    And Error message is visible