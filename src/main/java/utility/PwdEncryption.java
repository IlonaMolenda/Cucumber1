package utility;

import java.io.IOException;
import java.util.Base64;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


//Koles mial troche inaczej, ale to dziala. Sprawdzilam w LoginStep @Given("^I navigate to the login page$")


public class PwdEncryption {

  //WebDriver driver;  // gosc mial z driverem, ale ja wywalilam bo bez tez dziala

//  public PwdEncryption(WebDriver driver) {
//    this.driver = driver;
//  }

  public void  passwordEncoder (String key) throws IOException{
    String encodedPwdBytes = Base64.getEncoder().encodeToString(key.getBytes());
    System.out.println("EncodedPwdBytes: " + encodedPwdBytes);
  }

  public String passwordDecoder (String key) throws IOException{
    byte [] decodedPwdBytes = Base64.getDecoder().decode(key);
    return new String(decodedPwdBytes);
  }
}
