using CthulhuWizardAppTests.Hooks;
using CthulhuWizardAppTests.Pages;
using Microsoft.Playwright;

namespace CthulhuWizardAppTests.Steps; 

[Binding]
public class WizardPageSteps {
    private readonly IPage _user;
    private readonly WizardPage _wizardPage;

    public WizardPageSteps(BeforeScenario hooks, WizardPage wizardPage) {
        _user = hooks.User;
        _wizardPage = wizardPage;
    }

    [Then(@"the user should be redirected to WizardPage")]
    public async Task ThenTheUserShouldBeRedirectedToWizardPage() {
        await _user.GotoAsync(_wizardPage.WizardPageRoute);
        _wizardPage.AssertPageRoute();
    }
}
