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
import pageObjects.BookFlightPage;
import pageObjects.FlightConfirmationPage;
import pageObjects.SelectFlightPage;
import pageObjects.FlightFinderPage;

import dataProvider.ConfigFileReader;

public class steps_flight_booking {
	WebDriver driver;
	ConfigFileReader configFileReader;
	HomePage home_page;
	RegisterPage register_page;
	BookFlightPage book_flight_page;
	FlightConfirmationPage flight_confirmation_page;
	SelectFlightPage select_flight_page;
	FlightFinderPage flight_finder_page;
	
	@Given("^User is logged in from registration page")
	public void user_is_logged_in_from_registration_page( ) {
		System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + "\\drivers\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		configFileReader = new ConfigFileReader();
		driver.manage().timeouts().implicitlyWait(configFileReader.getImplicitlyWait(), TimeUnit.SECONDS);
		driver.get(configFileReader.getApplicationUrl());
		home_page = new HomePage(driver);
		home_page.clickOn_lnkRegister();
		register_page = new RegisterPage(driver);
	    register_page.enter_Username("user");
	    register_page.enter_Password("pass");
	    register_page.enter_ConfirmPassword("pass");
	    register_page.clickOn_btnSubmit();
	}
	
	@And("^User navigates to Flights page$")
	public void user_navigates_to_Flights_page() {
	    home_page.clickOn_lnkFlights();
	}

	@When("^User selects departing details as \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void user_selects_departing_details_as(String departingPort, String departingMonth, String departingDate) {
		flight_finder_page = new FlightFinderPage(driver);
		flight_finder_page.select_departingFrom(departingPort);
		flight_finder_page.select_departingMonth(departingMonth);
		flight_finder_page.select_departingDate(departingDate);
	}
  
	@And("^User selects arriving details as \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void user_searches_with_arriving_details_as(String arrivingPort, String arrivingMonth, String arrivingDate) {
		flight_finder_page.select_arrivingIn(arrivingPort);
		flight_finder_page.select_arrivingMonth(arrivingMonth);
		flight_finder_page.select_arrivingDate(arrivingDate);
	}
  
	@Then("^User should be able to book flights with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_should_be_able_to_book_flights_with(String departingPort, String arrivingPort) {
		flight_finder_page.clickOn_btnContinue();
		select_flight_page = new SelectFlightPage(driver);
		select_flight_page.clickOn_btnContinue();
		book_flight_page = new BookFlightPage(driver);
		book_flight_page.clickOn_btnContinue();
		flight_confirmation_page = new FlightConfirmationPage(driver);
		flight_confirmation_page.verify_flight_confirmation_message(departingPort, arrivingPort);
		driver.quit();
	}
}