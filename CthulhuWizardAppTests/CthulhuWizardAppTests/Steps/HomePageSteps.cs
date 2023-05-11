using CthulhuWizardAppTests.Hooks;
using CthulhuWizardAppTests.Pages;
using Microsoft.Playwright;

namespace CthulhuWizardAppTests.Steps; 

[Binding]
public class HomePageSteps {
    private readonly IPage _user;
    private readonly HomePage _homePage;

    public HomePageSteps(BeforeScenario hooks, HomePage homePage) {
        _user = hooks.User;
        _homePage = homePage;
    }

    [Given(@"the user is on the HomePage")]
    public async Task GivenTheUserIsOnTheHomePage() {
        await _user.GotoAsync(_homePage.HomePageRoute);
        await _homePage.AssertPageContent();
    }

    [When(@"the user click button with text Create investigator")]
    public async Task WhenTheUserClickButtonWithTextCreateInvestigator() {
        await _homePage.CreateInvestigatorButtonClick();
    }

}
