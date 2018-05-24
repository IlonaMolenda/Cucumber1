package runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;


// To jest do tego, zeby mozna bylo puszczac test z commandline (mvn test)
// W tym celu dodane zostaly 2 pluginy: maven-compiler i surefire

//JUnit - to jest ok - dla Junit
//@RunWith(Cucumber.class)
//@CucumberOptions(features = "src/test/java/Features", glue = "Steps")
//
//public class TestRunner {
//}

//TestNG - dodane dependecy - cucumber-testng i testng - to jest ok dla Testng
//@CucumberOptions(features = "src/test/java/Features", glue = "Steps")
//public class TestRunner extends AbstractTestNGCucumberTests{
//}


//tu tworzymy rapory przez dodanie tego format - powatanie plik cucumber.json w folderze target
//@CucumberOptions(features = "src/test/java/Features", format = "json:target/cucumber.json", glue = "Steps")
//public class TestRunner extends AbstractTestNGCucumberTests{
//
//}

// tu tworzymy raport troche ladniejszy w html - w target stworze folder site, w nim cucumber-pretty a tam bedzie index.html
@CucumberOptions(features = "src/test/java/Features", format = {"json:target/cucumber.json",
    "html:target/site/cucumber-pretty"}, glue = "Steps")
public class TestRunner extends AbstractTestNGCucumberTests {

}