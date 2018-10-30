package stepDefinitions;
 
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;

import pageObjects.HomePage;
import pageObjects.RegisterPage;

import dataProvider.ConfigFileReader;

public class steps_login {
	WebDriver driver;
	ConfigFileReader configFileReader;
	HomePage home_page;
	RegisterPage register_page;
	
	@Given("^User is on Register Page$")
	public void user_is_on_Register_Page() {
		System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + "\\drivers\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		configFileReader = new ConfigFileReader();
		driver.manage().timeouts().implicitlyWait(configFileReader.getImplicitlyWait(), TimeUnit.SECONDS);
		driver.get(configFileReader.getApplicationUrl());
		home_page = new HomePage(driver);
		home_page.clickOn_lnkRegister();
	}
	
	@When("^User enter username as \"(.*)\"$")
	public void User_enter_username_as(String username) {
		register_page = new RegisterPage(driver);
	    register_page.enter_Username(username);
	}
	
	@And("^User enter password as \"(.*)\"$")
	public void User_enter_password_as(String password) {
		register_page.enter_Password(password);
	}

	@And("^User enter confirmpassword as \"(.*)\"$")
	public void User_enter_confirmpassword_as(String confirmpassword) {
		register_page.enter_ConfirmPassword(confirmpassword);
	}

	@And("^User press submit")
	public void User_press_submit() {
		register_page.clickOn_btnSubmit();
	}

	@Then("^User is logged in successfully as \"(.*)\"$")
	public void user_is_logged_in_successfully_as(String username) {
		register_page.verify_successful_login_message(username);
		driver.quit();
	}
	
	@Given("^User is already logged in with \"([^\"]*)\" and \"([^\"]*)\" from registration page$")
	public void user_is_already_logged_in_from_registration_page(String username, String password) {
		System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + "\\drivers\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		configFileReader = new ConfigFileReader();
		driver.manage().timeouts().implicitlyWait(configFileReader.getImplicitlyWait(), TimeUnit.SECONDS);
		driver.get(configFileReader.getApplicationUrl());
		home_page = new HomePage(driver);
		home_page.clickOn_lnkRegister();
		register_page = new RegisterPage(driver);
	    register_page.enter_Username(username);
	    register_page.enter_Password(password);
	    register_page.enter_ConfirmPassword(password);
	    register_page.clickOn_btnSubmit();
	}

	@When("^User clicks Signoff$")
	public void user_clicks_Signoff() throws Throwable {
		register_page.clickOn_btnSignoff();
	}

	@Then("^User is signed off successfully")
	public void User_is_signed_off_successfully() {
		register_page.verify_successful_logout();
		driver.quit();
	}
}