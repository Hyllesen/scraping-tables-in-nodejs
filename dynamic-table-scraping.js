const request = require("request-promise");
const cheerio = require("cheerio");

async function main() {
  const result = await request.get(
    "https://codingwithstefan.com/table-example"
  );
  const $ = cheerio.load(result);
  const scrapedRows = [];
  const tableHeaders = [];
  $("body > table > tbody > tr").each((index, element) => {
    if (index === 0) {
      const ths = $(element).find("th");
      ths.each((index, element) => {
        tableHeaders.push(
          $(element)
            .text()
            .toLowerCase()
        );
      });
      return true;
    }
    const tds = $(element).find("td");
    const tableRow = {};
    tds.each((index, element) => {
      tableRow[tableHeaders[index]] = $(element).text();
    });
    scrapedRows.push(tableRow);
  });
  console.log(scrapedRows);
}

main();
