package Steps;

import Base.BaseUtil;
import com.sun.org.apache.xpath.internal.SourceTree;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import java.util.ArrayList;
import java.util.List;
import org.openqa.selenium.WebDriver;
import utility.PwdEncryption;

public class LoginStep extends BaseUtil{

  private BaseUtil base;

 // WebDriver driver; // to tylko do testu kodowania - gdy robilam jak gosciu
  private PwdEncryption pwdEncryption = new PwdEncryption(); // to do testu kodowania - wywalilam driver

  public LoginStep(BaseUtil base) {
    this.base = base;
  }

  @Given("^I navigate to the login page$")
  public void iNavigateToTheLoginPage() throws Throwable {
    //test czy kodowanie dziala - nie zwiazane zupelnie z tym przykladem
    System.out.println(pwdEncryption.passwordDecoder("YWJjZGVmZw==") + '\n');
    pwdEncryption.passwordEncoder("abcdefg");
  }

//  @And("^I enter the username as as admin and password as admin$") // TAK BYLO ZANIM DALAM LOGIN I PASSWORD W "" - "ADMIN"
//  public void iEnterTheUsernameAsAsAdminAndPasswordAsAdmin() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    //throw new PendingException();
 // }

  @And("^I click login button$")
  public void iClickLoginButton() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    //throw new PendingException();
  }

  @Then("^I should see userForm page$")
  public void iShouldSeeUserFormPage() throws Throwable {

    System.out.println("The browser is " + base.stepInfo);

    System.out.println("I should see userForm page" + '\n');
  }

  @And("^I enter the following for login$")
  public void iEnterUserNameAndPasssword(DataTable table) throws Throwable {

//ten sposob jest dobry
    List<List<String>> data = table.raw();

    System.out.println("The value is " + data.get(1).get(0).toString());
    System.out.println("The value is " + data.get(1).get(1).toString());

//ale tan jest lepszy - z klasa User
    List<User> users = new ArrayList<User>();
    users = table.asList(User.class);
    for (User user: users) {
      System.out.println("The UserName is " + user.username);
      System.out.println("The Password is " + user.password);

    }

  }

  @And("^I enter ([^\"]*) and ([^\"]*)$") // to do senerio outline
  public void iEnterUsernameAndPassword(String userName, String password) throws Throwable {
    System.out.println("The userName is " + userName);
    System.out.println("The password is " + password);

  }

//  @And("^I enter the username as \"([^\"]*)\" and password as \"([^\"]*)\"$") // TO JEST DO USERNAME I PASWORD W "" - "ADMIN"
//  public void iEnterTheUsernameAsAndPasswordAs(String username, String password) throws Throwable {
//    System.out.println("UserName is: "+ username + " and Password is: " + password);
//  }

  public class User { //chyba lepiej
    public String username; // nazwa kolumny w table w login.feature musi byc taka sama jak nazwa zmiennej tutataj - users
    public String password;

    public User(String userName, String passWord) {
      this.username = userName;
      this.password = passWord;
    }
  }
}
