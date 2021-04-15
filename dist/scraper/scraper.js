"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scraper {
}
exports.default = Scraper;
// import { JsxEmit } from 'typescript'
// import { puppeteer } from 'puppeteer'
// import { mysqlCrawl } from './mysql'
// import mysql from 'mysql'
// import GameMetadataRepo from '../database/repos/gamemetadata'
// import Logger from 'logger'
// class Scraper {  
//   async crawl_html(url : string) { 
//     const browser = await puppeteer.launch({ headless : true })
//     const page = await browser.newPage()
//     await page.goto(url)    
//     const data = await page.evaluate(() => document.querySelector('*').outerHTML)
//     await browser.close()  
//     return data
//   }
//   async saveHtmlToDatabase(url : string, html : string, repository : Repo) {
//     const sql = mysql.format(`INSERT INTO scraped_html (url, html) VALUES ?`)
//     return mysqlCrawl.insertQuery(sql, [mysql.escape(url), mysql.escape(data)])
//   }
//   async getUrlContents({ url, repository, logger }: { url: string; repository: Repo; logger: Logger }) {
//     const sql = `SELECT url, html FROM scraped_html WHERE url = '${url}'`
//     return new Promise((resolve, reject) => {
//       mysqlCrawl.query(sql, async (err, results) => {
//         if(err) 
//           reject(err)
//         if(results.length == 0) {
//           const html = await this.crawl_html(url)     
//           this.save_html_to_database(url, html, mysqlCrawl)
//             .then(_res => resolve({
//               existedInDatabase : false, 
//               html
//             }))
//         } else {
//           return resolve({
//             existedInDatabase : true,
//             html : results[0].html
//           })
//         }
//       })
//     })
//   }
// }
// module.exports = Scraper
//# sourceMappingURL=scraper.js.map