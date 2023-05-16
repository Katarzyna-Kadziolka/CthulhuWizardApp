using CthulhuWizardAppTests.Hooks;
using FluentAssertions;
using Microsoft.Playwright;

namespace CthulhuWizardAppTests.Pages.WizardPageParts;

public class InvestigatorPersonalDataPart {
	private readonly IPage _user;

	public InvestigatorPersonalDataPart(BeforeScenario hooks) {
		_user = hooks.User;
	}

	private ILocator NameInput => _user.GetByLabel("Name", new () {Exact = true});
	private ILocator AgeInput => _user.GetByLabel("Age");
	private ILocator NextButton => _user.GetByRole(AriaRole.Button, new() {
		Name = "Next"
	});

	private ILocator EmptyNameErrorMessage => _user.GetByText("Name cannot be empty");

	public async Task SetTextIntoNameInput(string text) {
		await NameInput.FillAsync(text);
		await NameInput.BlurAsync();
	}

	public async Task SetTextIntoAgeInput(string text) {
		await AgeInput.FillAsync(text);
		await AgeInput.BlurAsync();
	}  

	public async Task NextButtonClick() => await NextButton.ClickAsync();
	
	public async Task NextButtonIsDisabled() {
		var isDisabled = await NextButton.IsDisabledAsync();
		isDisabled.Should().BeTrue();
	}

	public async Task EmptyNameErrorMessageIsVisible() {
		var isVisible = await EmptyNameErrorMessage.IsVisibleAsync();
		isVisible.Should().BeTrue();
	} 

}