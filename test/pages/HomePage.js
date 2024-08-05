class HomePage {
    open() {
        return browser.url('/');
    }

    get acceptCookies () {
        return $('button[data-click-id="hgr-cookie_consent-accept_all_btn"]');
    }

    get claimDeal () {
        return $('button[data-click-id="hgr-header-cta-get_started"]');
    }

    get businessPlan () {
        return $('button[data-click-id="hgr-homepage-pricing_table-add_to_cart-hosting_hostinger_business"]');
    }


}

export default new HomePage();

