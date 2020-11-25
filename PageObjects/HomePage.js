const puppeteer = require('puppeteer');
const helpers = require('../Helpers/Selectors');

class HomePage {

    async ClickBestSellersLink(page) {
        await page.waitForSelector(helpers.BestSellersProducts, { timeout: 3000 }).catch(() => {
            page.screenshot({ path: 'Screenshots/ClickBestSellersLink.png' })
            console.log('Class ' + helpers.BestSellersProducts + ' doesn\'t exist!')
        });

        const elements = await page.$$(helpers.BestSellersProducts)
        await elements[0].click()
        //console.log("Navigate to Best Sellers Page");
        await page.waitForTimeout(2000);
    }
}
module.exports = HomePage;