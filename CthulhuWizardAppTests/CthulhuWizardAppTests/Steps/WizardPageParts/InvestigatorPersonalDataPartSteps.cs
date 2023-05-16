using CthulhuWizardAppTests.Hooks;
using CthulhuWizardAppTests.Pages.WizardPageParts;
using Microsoft.Playwright;

namespace CthulhuWizardAppTests.Steps.WizardPageParts; 

[Binding]
public class InvestigatorPersonalDataPartSteps {
	private readonly IPage _user;
	private readonly InvestigatorPersonalDataPart _page;

	public InvestigatorPersonalDataPartSteps(BeforeScenario hooks, InvestigatorPersonalDataPart page) {
		_user = hooks.User;
		_page = page;
	}

	[Given(@"the user is on Investigator Personal Data Step")]
	public void GivenTheUserIsOnInvestigatorPersonalDataStep() {}

	[When(@"Name input is empty")]
	public async Task WhenNameInputIsEmpty() {
		await _page.SetTextIntoNameInput(String.Empty);
	}

	[Then(@"Next button is disabled")]
	public async Task ThenNextButtonIsDisabled() {
		await _page.NextButtonIsDisabled();
	}

	[Then(@"empty Name error message is visible")]
	public async Task ThenEmptyNameErrorMessageIsVisible() {
		await _page.EmptyNameErrorMessageIsVisible();
	}

}