const puppeteer = require('puppeteer');
var argv = require('minimist')(process.argv.slice(2));
var siren = argv.s;
var outputFile= argv.o;
var url = 'https://societe.ninja/data.php?siren='+siren;
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle2'});
  await page.pdf({path: outputFile, printBackground: true, width:1920, height: 10000});
 
  await browser.close();
})();