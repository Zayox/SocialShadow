const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const app = express();
const PORT = 3000;

app.use("/static", express.static(__dirname));app.use(cors());
app.use(express.json());

app.post("/clear", async (req, res) => {
    try{
        const browser = await puppeteer.launch({headless: true, defaultViewport: null});
        const [page] = await browser.pages();
        const url = "https://www.instagram.com/?hl=en";
        await page.goto(url);
        //await page.waitForSelector('[class="aOOlW   HoLwm "]');
        //await page.click('[class="aOOlW   HoLwm "]');
        await page.waitForSelector('[name=username]');
        await page.type('[name=username]',req.body.email);
        await page.waitForSelector('[name=password]');
        await page.type('[name=password]',req.body.pass,{delay: 100});
        await page.click('[type=submit]');
        await page.waitForSelector('[data-testid=user-avatar]');
        await page.click('[data-testid=user-avatar]');
        await page.waitForSelector('[href="/accounts/edit/"]');
        await page.click('[href="/accounts/edit/"]');
        await page.waitForSelector('[href="/accounts/privacy_and_security/"]');
        await page.click('[href="/accounts/privacy_and_security/"]');
        await page.waitForSelector('[class="mwD2G"]');
        await page.click('[class="mwD2G"]');
        await page.waitForSelector('[class="aOOlW  bIiDR  "]');
        await page.click('[class="aOOlW  bIiDR  "]');
        await console.log("done ez");
        await browser.close();
        return res.status(200).send("done bro");
        res.json({
            success: true
        })
    }catch (e){
        console.log(e);
        res.status(500).send("Something broke");
    }
})

app.post("/screenshot", async (req, res) => {
    try{

            const ID = (new Date().getTime().toString(36));
            const loc = "./screens/" + ID + ".png";


            const browser = await puppeteer.launch({headless: true, defaultViewport: null, ignoreDefaultArgs: ['--disable-extensions']});
            const [page] = await browser.pages();
            await page.goto(req.body.url);
            await page.waitForSelector('[class="gLFyf gsfi"]');
            await page.type('[class="gLFyf gsfi"]', req.body.name);
            await page.keyboard.press('Enter');
            await page.waitForSelector('[class="v7W49e"]');
            await page.screenshot({
                    path: loc,
                    fullPage: true
            });

            await browser.close();

            res.json({
                success: true,
                ID
            })
    }catch (e){
        console.log(e);
        res.status(500).send("Something broke");
    }
})


app.listen(process.env.PORT || PORT, () => console.log('Server started on PORT: ' + PORT));