package Steps;

import Base.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook extends BaseUtil{

  private BaseUtil base;

  public Hook(BaseUtil base) {
    this.base = base;
  }

  @Before
  public void initializeTest(){
    System.out.println("Opening the browser" + '\n');

    base.stepInfo = "Firefox";
  }

  @After
  public void tearDownTest(){
    System.out.println("Closing the browser");
  }

//  @After // Mozna dac Scenario jako argument i wykorzystac np jakis warunek i mnostwo opcji jakie ma scenario
//  public void tearDownTest(Scenario scenario){
//    if(scenario.isFailed()){
//      // np. zrob screenshot
//      System.out.println(scenario.getName());
//    }
//    System.out.println("Closing the browser");
//  }

}
