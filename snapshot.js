const puppeteer = require('puppeteer-core');

(async () => {
    try {
        const browser = await puppeteer.launch({
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            headless: 'new'
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 1440, height: 900 });
        console.log('Navigating to http://localhost:3000...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 15000 });
        console.log('Taking screenshot...');
        await page.screenshot({ path: 'public/screenshot.png', fullPage: false });
        console.log('Screenshot saved to public/screenshot.png');
        await browser.close();
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
})();
