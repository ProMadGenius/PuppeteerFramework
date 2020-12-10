module.exports = {
    baseUrl: "https://www.amazon.com",
    /*Home Page Selectors */
    BestSellersProducts: "a[aria-label='Amazon Top Sellers - Shop now']",
    /*Category Selectors */
    electronicCategory: "//li//a[contains(.,'Electronics')]",
    headphonesCategory: "//div[@id='zg-left-col']//li//a[contains(@href,'Best-Sellers-Electronics-Audio-Headphones')]",
    electronicCategoryBestSellers: "//div//a[contains(@href,'bestsellers/electronics')]",
    /*Best Sellers Items */
    bestSellersItems: "#zg-ordered-list div[aria-hidden='true']"
}
