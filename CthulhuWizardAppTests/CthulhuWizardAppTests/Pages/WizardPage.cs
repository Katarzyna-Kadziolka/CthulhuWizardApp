using CthulhuWizardAppTests.Hooks;
using FluentAssertions;
using Microsoft.Playwright;

namespace CthulhuWizardAppTests.Pages; 

public class WizardPage {
    private readonly IPage _user;
    public readonly string WizardPageRoute = "http://localhost:3000/wizard";

    public WizardPage(BeforeScenario hooks) {
        _user = hooks.User;
    }

    public void AssertPageRoute() {
        _user.Url.Should().Be(WizardPageRoute);
    }
}
