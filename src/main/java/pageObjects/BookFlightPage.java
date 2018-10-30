package pageObjects;
 
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class BookFlightPage {
	
	public BookFlightPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how = How.NAME, using = "buyFlights") 
	private WebElement btn_Continue;

	public void clickOn_btnContinue() {
		btn_Continue.click();
	}
}