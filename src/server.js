const express = require('express');
const puppeteer = require('puppeteer');
require('dotenv').config();

const app = express();
const PORT = 3000;


app.get("/", async (req, res) => {

    try{
        const browser = await puppeteer.launch();
        let page = await browser.newPage();

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

        return res.status(200).send("done bro");
    }catch (e){
        console.log(e);
        res.status(500).send("Something broke");
    }
})




app.listen(process.env.PORT || PORT, () => console.log('Server started on PORT: ' + PORT));
