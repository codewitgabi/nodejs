const url = require("url");

const testUrl = "https://www.swisstronik.com/early-bird-announcement?utm_source=Telegram&utm_medium=promo&utm_campaign=EB0623ref&utm_team=mktld&utm_channel=0&utm_creative=0&utm_lang=en&utm_date=45121";

const parsedUrl = url.parse(testUrl, true);

console.log(parsedUrl);
console.log(url.format(testUrl));
console.log(url.resolve("http://localhost:8000/", "/api/dev"))
console.log(url.resolve("http://localhost:8000/api/dev", "/hello"))