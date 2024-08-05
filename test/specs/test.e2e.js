import { expect } from '@wdio/globals'
import HomePage from '../pages/HomePage.js'
import CartPage from '../pages/CartPage.js'
import { faker } from '@faker-js/faker'

describe('Plan purchase', () => {

    beforeEach(async () => {
        await HomePage.open();
        await browser.pause(1000);
    });

    it('should initiate the purchase of a plan for 24 months', async () => {
        
        await HomePage.acceptCookies.click();
        await HomePage.claimDeal.click();
        await browser.pause(1000);
        await HomePage.businessPlan.click();

        await CartPage.twoYearsPlan.click();
        await expect(CartPage.selectedPlan).toHaveText(expect.stringContaining('24 months plan'));
        await expect(CartPage.planPrice).toHaveText('$95.76');

        await CartPage.createAccount(faker.internet.email(), faker.internet.password());
        // cannot use faker.finance.creditCardNumber() because sometimes cc number is valid
        await CartPage.addCreditCard(faker.person.fullName(), faker.finance.pin(), 1226, faker.finance.creditCardCVV());

        await CartPage.submitButton.click();

        //a proper waiter should be added here
        await browser.pause(8000);

        await expect(browser.$('.error-message.invalid')).toHaveText("The card number is invalid.");
    })
})

