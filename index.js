const request = require("request-promise");
const cheerio = require("cheerio");

async function main() {
  const result = await request.get(
    "https://codingwithstefan.com/table-example"
  );
  const $ = cheerio.load(result);
  const scrapedRows = [];
  $("body > table > tbody > tr").each((index, element) => {
    if (index === 0) return true;
    const tds = $(element).find("td");
    const company = $(tds[0]).text();
    const contact = $(tds[1]).text();
    const country = $(tds[2]).text();
    const scrapedRow = { company, contact, country };
    scrapedRows.push(scrapedRow);
  });
  console.log(scrapedRows);
}

main();
