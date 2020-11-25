const puppeteer = require('puppeteer');
const CategoryPage = require('../../PageObjects/BestSellersCategoriesPage');
const HomePage = require('../../PageObjects/HomePage');
const helpers = require('../../Helpers/Selectors');
const { assert } = require('chai');
var categoryPage = new CategoryPage();
var homePage = new HomePage();

describe("Display The Headphones Best Sellers List", () => {
    let browser;
    let page;

    it("Go To Amazon Home Page", async () => {
        browser = await puppeteer.launch({ headless: false, defaultViewport: null })
        page = await browser.newPage();
        await page.goto(helpers.baseUrl, { waitUntil: 'networkidle2' });
    });

    it("Go to the Best Sellers Page", async () => {
        await homePage.ClickBestSellersLink(page);
    });

    it("Go to the Headphones Section", async () => {
        await categoryPage.ClickCategory(page, helpers.electronicCategory);
        await categoryPage.ClickCategory(page, helpers.headphonesCategory);
        await page.waitForTimeout(2000);
    });

    it("Verify elements are loaded and display the Best Sellers of this section", async () => {
        const list = await categoryPage.GetBestSellers(page);
        assert.isNotEmpty(list);
        assert.isAbove(list.length, 10);
        //console.log(list);
    });

    it("Close the Browser", async () => {
        await page.waitForTimeout(2000);
        await browser.close();
    })
});