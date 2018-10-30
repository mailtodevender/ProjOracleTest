package pageObjects;
 
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;


import org.junit.Assert;

 
public class RegisterPage {
	
	public RegisterPage(WebDriver driver) {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how = How.NAME, using = "email") 
	private WebElement txt_Username;
	
	@FindBy(how = How.NAME, using = "password") 
	private WebElement txt_Password;
	
	@FindBy(how = How.NAME, using = "confirmPassword") 
	private WebElement txt_ConfirmPassword;
	
	@FindBy(how = How.NAME, using = "register") 
	private WebElement btn_Submit;

	@FindBy(how = How.XPATH, using = "(.//*[normalize-space(text()) and normalize-space(.)=concat('using the user name and password you', \"'\", 've just entered.')])[1]/following::b[1]") 
	private WebElement txt_LoginSuccessMessage;

	@FindBy(how = How.LINK_TEXT, using = "SIGN-ON") 
	private WebElement btn_Signon;
	
	@FindBy(how = How.LINK_TEXT, using = "SIGN-OFF") 
	private WebElement btn_Signoff;

	public void enter_Username(String arg) {
		txt_Username.sendKeys(arg);
	}
	
	public void enter_Password(String arg) {
		txt_Password.sendKeys(arg);
	}
	
	public void enter_ConfirmPassword(String arg) {
		txt_ConfirmPassword.sendKeys(arg);
	}
	
	public void clickOn_btnSubmit() {
		btn_Submit.click();
	}
	
	public void verify_successful_login_message(String arg) {
		Assert.assertEquals(txt_LoginSuccessMessage.getText(), "Note: Your user name is " + arg + ".");
	}
	
	public void clickOn_btnSignoff() {
		btn_Signoff.click();
	}

	public void verify_successful_logout() {
		Assert.assertEquals(btn_Signon.getText(), "SIGN-ON");
	}
}