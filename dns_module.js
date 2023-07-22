const dns = require("dns");

dns.lookup("www.twitter.com", (err, addr, family) => {
  console.log(addr)
})