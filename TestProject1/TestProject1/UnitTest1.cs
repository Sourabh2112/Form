using OpenQA.Selenium.Chrome;
using OpenQA.Selenium;

namespace TestProject1
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            // Create a new instance of the Chrome driver
            IWebDriver driver = new ChromeDriver();

            try
            {
                // Navigate to the form page
                driver.Navigate().GoToUrl("http://localhost:3000");

                // Find the name input element and enter a name
                IWebElement nameInput = driver.FindElement(By.Id("name")); // Assuming the id of the input is 'name'
                nameInput.SendKeys("John Doe");

                // Find the email input element and enter an email
                IWebElement emailInput = driver.FindElement(By.Id("branch")); // Assuming the id of the input is 'email'
                emailInput.SendKeys("john.doe@example.com");

                // Find the phone input element and enter a phone number
                IWebElement phoneInput = driver.FindElement(By.Id("roll")); // Assuming the id of the input is 'phone'
                phoneInput.SendKeys("1234567890");

                // Find the submit button and click it
                IWebElement submitButton = driver.FindElement(By.Id("submit")); // Assuming the id of the submit button is 'submit'
                submitButton.Click();

                // Wait for a few seconds to see the result
                System.Threading.Thread.Sleep(5000);

                // Optionally, you can add assertions here to verify the form was submitted successfully
                // For example, check for a success message on the page
                IWebElement successMessage = driver.FindElement(By.Id("successMessage"));
                if (successMessage.Text.Contains("Thank you"))
                {
                    Console.WriteLine("Form submitted successfully!");
                }
                else
                {
                    Console.WriteLine("Form submission failed.");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred: {ex.Message}");
            }
            finally
            {
                // Close the browser
                driver.Quit();
            }
        }
    }
}