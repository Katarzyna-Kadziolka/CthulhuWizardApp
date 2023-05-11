using System.Diagnostics;

namespace CthulhuWizardAppTests.Hooks; 

[Binding]
public class OneTimeSetup {
    private static Process webAppHost;

    [BeforeTestRun]
    public static void SetupProject() {
        const string projectPath = "../../../../../cthulhu-wizard-app";
        webAppHost = Process.Start("cmd.exe", $"/c cd {projectPath} && npm run dev");
    }

    [AfterTestRun]
    public static void CleanUpProject() {
        webAppHost.Kill();
    }
}
