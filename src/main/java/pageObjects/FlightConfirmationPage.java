package pageObjects;
 
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import org.junit.Assert;
 
public class FlightConfirmationPage {
	
	public FlightConfirmationPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}

	@FindBy(how = How.XPATH, using = "(.//*[normalize-space(text()) and normalize-space(.)='CONTACT'])[1]/following::font[3]") 
	private WebElement txt_FlightConfirmationMessage;

	@FindBy(how = How.XPATH, using = "(.//*[normalize-space(text()) and normalize-space(.)='Departing'])[1]/following::font[1]") 
	private WebElement txt_FlightConfirmationMessageForDepartingDetails;

	@FindBy(how = How.XPATH, using = "(.//*[normalize-space(text()) and normalize-space(.)='Returning'])[1]/following::font[1]") 
	private WebElement txt_FlightConfirmationMessageForArrivingDetails;
	
	public void verify_flight_confirmation_message(String departingPort, String arrivingPort) {
		Assert.assertEquals(txt_FlightConfirmationMessage.getText(), "Your itinerary has been booked!");
		Assert.assertTrue(txt_FlightConfirmationMessageForDepartingDetails.getText().contains(departingPort + " to " + arrivingPort));
		Assert.assertTrue(txt_FlightConfirmationMessageForArrivingDetails.getText().contains(arrivingPort + " to " + departingPort));
	}
}