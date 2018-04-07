package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(strict = false,
        features = "src/test/java/FeatureFiles/requests.feature",
        glue = "StepDefs",
        plugin = {"json:target/cucumber.json", "html:target/html/cucumber-html-reports"})

public class requestRunner extends AbstractTestNGCucumberTests{
}

