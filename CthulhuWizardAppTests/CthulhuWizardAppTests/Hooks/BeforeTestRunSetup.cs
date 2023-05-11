using System.Diagnostics;

namespace CthulhuWizardAppTests.Hooks; 

[Binding]
public class BeforeTestRunSetup {

    [BeforeTestRun]
    public static void SetupProject() {
        const string projectPath = "../../../../../cthulhu-wizard-app";
        Process.Start("cmd.exe", $"/c cd {projectPath} && npm run dev");
    }
}
