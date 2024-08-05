class CartPage {

    get twoYearsPlan () {
        return $('(//div[@class="radio"])[3]');
    }

    get selectedPlan () {
        return $('.plan-info__plan-name.d-flex.flex-grow.h-my-0.align-items-center');
    }

    get planPrice () {
        return $('h4[class="h-my-0"]');
    }

    get inputEmail () {
        return $('div[class="h-input primary create-account__email-input"] input[type="text"]');
    }

    get inputPassword () {
        return $('input[type="password"]');
    }

    async createAccount (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
    }

    get inputFullName () {
    return $('#cardholdername');
    }

    get inputCardNumber () {
    return $('input[name="cc-number"]');
    }

    get inputExpDate () {
    return $('input[name="cc-exp"]');
    }

    get inputCvcCode () {
    return $('input[name="cc-cvc"]');
    }

    async addCreditCard (fullName, cardNumber, expDate, cvcCode) {
        await this.inputFullName.setValue(fullName);

        const firstFrame = await browser.$('(//iframe[contains(@class, "processout-field-cc-iframe")])[1]');
        await browser.switchToFrame(firstFrame);
        await this.inputCardNumber.setValue(cardNumber);
        await browser.switchToParentFrame();

        const secondFrame = await browser.$('(//iframe[contains(@class, "processout-field-cc-iframe")])[2]');
        await browser.switchToFrame(secondFrame);
        await this.inputExpDate.setValue(expDate);
        await browser.switchToParentFrame();

        const thirdFrame = await browser.$('(//iframe[contains(@class, "processout-field-cc-iframe")])[3]');
        await browser.switchToFrame(thirdFrame);
        await this.inputCvcCode.setValue(cvcCode);
        await browser.switchToParentFrame();
    }

    get submitButton () {
        return $('#hcart-submit-payment');
        }
}

export default new CartPage();
