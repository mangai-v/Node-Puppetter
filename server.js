// const http = require('http')
// const fs = require('fs')
// const PORT = 3000

// const server = http.createServer((req,res) => {
//     res.statusCode = 200  
//     res.setHeader('Content-Type','text/plain')  
//     res.end('Hello World!!!')
// })

// server.listen(PORT,(err => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('server is running on '+PORT);
//     }
// }))
const puppeteer = require('puppeteer');
(async () => {
        const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.npmjs.com/package/puppeteer")

    const title = await page.title()
    const content = await page.evaluate(()=>{
        return document.querySelector('h1').innerText
    })

    console.log(`Title:${title}`)
    console.log(`Content:${content}`)
    await browser.close()
})()

  

