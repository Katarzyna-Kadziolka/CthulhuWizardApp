using System.Text.RegularExpressions;
using CthulhuWizardAppTests.Hooks;
using FluentAssertions;
using Microsoft.Playwright;

namespace CthulhuWizardAppTests.Pages; 

public class HomePage {
    private readonly IPage _user;
    public readonly string HomePageRoute = "http://localhost:3000/";

    public HomePage(BeforeScenario hooks) {
        _user = hooks.User;
    }

    private ILocator CreateInvestigatorButton => _user.GetByRole(AriaRole.Button, new() {
        NameRegex = new Regex("Create investigator", RegexOptions.IgnoreCase)
    });

    public async Task AssertPageContent() {
        _user.Url.Should().Be(HomePageRoute);

        var createInvestigatorButtonVisibility = await CreateInvestigatorButton.IsVisibleAsync();
        createInvestigatorButtonVisibility.Should().BeTrue();
    }

    public async Task CreateInvestigatorButtonClick() {
        await CreateInvestigatorButton.ClickAsync();
    }
}
