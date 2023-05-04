let puppeteer = require("puppeteer");
let id = "_ok.anurag";
let pw = "bishtrocks";

(async function() {
    let browser = await puppeteer.launch({
        headless : false,
        defaultViewport : null,
        args : ["--start-maximized"],
    });

    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.instagram.com/accounts/login/");
    await tab.waitForTimeout(2000);
    await tab.type("input[name='username']" , id);
    await tab.type("input[name='password']" , pw);
    await tab.click("._acan._acap");
})();