const puppeteer = require('puppeteer');

 (async () => {
        const browser = await puppeteer.launch({headless: true, defaultViewport: null});


        let [page] = await browser.pages();

        await page.goto('https://www.instagram.com/?hl=fr');
        //await page.click('[role=presentation]>div>div>button');
        await page.waitForSelector("[name=username]");
        await page.type("[name=username]", "amirmoumen06@yahoo.fr", {delay: 100}); // Types instantly
        await page.type("[name=password]", "AmirZayoxMDP06", {delay: 100}); // Types instantly
        await page.click("[type=submit]");
        await page.waitForSelector('[placeholder=Rechercher]');
        await page.type('[placeholder=Rechercher]', "ken", {delay: 100}); // Types instantly
        await page.waitForSelector('[role=none] > a');
        await page.click('[role=none] > a');
        await page.waitForSelector('[class=FFVAD]');
        await page.click('[class=FFVAD]');
        await page.waitForSelector('[class=fr66n]');
        await page.click('[class=fr66n]');
        await console.log("done bro");
        //x selector scraping best thing ever used


        //await browser.close();
    })();


