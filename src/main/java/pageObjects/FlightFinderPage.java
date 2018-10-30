package pageObjects;
 
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

 
public class FlightFinderPage {
	
	public FlightFinderPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how = How.NAME, using = "fromPort")
	private WebElement drpdown_departingFrom;

	@FindBy(how = How.NAME, using = "fromMonth")
	private WebElement drpdown_departingMonth;

	@FindBy(how = How.NAME, using = "fromDay")
	private WebElement drpdown_departingDate;

	@FindBy(how = How.NAME, using = "toPort")
	private WebElement drpdown_arrivingIn;

	@FindBy(how = How.NAME, using = "toMonth")
	private WebElement drpdown_arrivingMonth;

	@FindBy(how = How.NAME, using = "toDay")
	private WebElement drpdown_arrivingDate;

	@FindBy(how = How.NAME, using = "findFlights") 
	private WebElement btn_Continue;
	
	public void select_departingFrom(String arg) {
		new Select(drpdown_departingFrom).selectByVisibleText(arg);
	}	
	
	public void select_departingMonth(String arg) {
		new Select(drpdown_departingMonth).selectByVisibleText(arg);
	}	

	public void select_departingDate(String arg) {
		new Select(drpdown_departingDate).selectByVisibleText(arg);
	}	

	public void select_arrivingIn(String arg) {
		new Select(drpdown_arrivingIn).selectByVisibleText(arg);
	}	
	
	public void select_arrivingMonth(String arg) {
		new Select(drpdown_arrivingMonth).selectByVisibleText(arg);
	}	

	public void select_arrivingDate(String arg) {
		new Select(drpdown_arrivingDate).selectByVisibleText(arg);
	}	

	public void clickOn_btnContinue() {
		btn_Continue.click();
	}
}