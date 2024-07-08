const puppetter = require('puppeteer')
// (async()=>{
//     const browser = await puppetter.launch()
//     const page = await browser.newPage()
//     await page.goto('https://www.youtube.com/')

//     const title = await page.title()
//     const content = await page.evaluate(()=>{
//         return document.querySelector('h1').innerText
//     })

//   console.log(`Title: ${title}`);
//   console.log(`Content: ${content}`);
//   await browser.close();
// })()
// Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

// Navigate the page to a URL.
await page.goto('https://developer.chrome.com/');

// Set screen size.
await page.setViewport({width: 1080, height: 1024});

// Type into search box.
await page.locator('.devsite-search-field').fill('automate beyond recorder');

// Wait and click on first result.
await page.locator('.devsite-result-item-link').click();

// Locate the full title with a unique string.
const textSelector = await page
  .locator('text/Customize and automate')
  .waitHandle();
const fullTitle = await textSelector?.evaluate(el => el.textContent);

// Print the full title.
console.log('The title of this blog post is "%s".', fullTitle);

await browser.close();