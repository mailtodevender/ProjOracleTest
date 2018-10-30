package pageObjects;
 
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
 
public class HomePage {
	
	public HomePage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how = How.LINK_TEXT, using = "REGISTER")
	private WebElement lnk_Register;

	@FindBy(how = How.LINK_TEXT, using = "Flights") 
	private WebElement lnk_Flights;

	public void clickOn_lnkRegister() {
		lnk_Register.click();
	}	

	public void clickOn_lnkFlights() {
		lnk_Flights.click();
	}	
}