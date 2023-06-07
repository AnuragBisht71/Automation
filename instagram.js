const id = "_ok.anurag";
const pw = "bishtrocks"; 
const puppeteer = require("puppeteer");

(async function() {
    let browser = await puppeteer.launch ({
        headless: false ,
        defaultViewport : null , 
        args : ["--start-maximized"] 
    });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.instagram.com/accounts/login/");
    await tab.waitForSelector('input[name="username"]');
    await tab.type('input[name="username"]' , id);
    await tab.type('input[name="password"]' , pw);
    await tab.click('button[class="_acan _acap _acas _aj1-"]');
    await tab.waitForSelector(".x1i10hfl.xjqpnuy");
    await tab.click(".x1i10hfl.xjqpnuy"); // FOR POP UP NOTIFICATION
    await tab.waitForSelector("._a9-z");
    await tab.click("._a9-z"); // FOR POP UP NOTIFICATION
})();
