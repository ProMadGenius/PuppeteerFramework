const puppeteer = require('puppeteer');
const helpers = require('../Helpers/Selectors');

class BestSellersCategoriesPage {

    async ClickCategory(page, categoryName) {
        let xpath = categoryName;
        await page.waitForXPath(xpath, { timeout: 3000 }).catch(() => {
            page.screenshot({ path: 'Screenshots/ClickBestSellersLink.png' })
            console.log('Class ' + categoryName + 'doesn\'t exist!')
        });
        const elements = await page.$x(xpath)
        await elements[0].click()
        //console.log("Navigate to the " + categoryName + " category");
    }

    async GetBestSellers(page) {
        const selector2 = '#zg-ordered-list div[aria-hidden="true"]';
        await page.waitForSelector(selector2, { timeout: 3000 }).catch(() => {
            page.screenshot({ path: 'Screenshots/ClickBestSellersLink.png' })
            console.log('List of Best Sellers doesn\'t exist!')
        });
        return await page.$$eval(selector2, e => e.map(item => item.textContent));
    }
}
module.exports = BestSellersCategoriesPage;