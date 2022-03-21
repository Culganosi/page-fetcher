const request = require('request');
const fs = require('fs');
const domainName = process.argv[2]; // 1st line on command line will be the link
const filePath = process.argv[3]; // 2nd arg on command line will be path to save html file

request (domainName, (error, response, body) => {
  if (error) {
    console.log ('ERROR', error);
  }
fs.writeFile(`${filePath}`, body, function(error) {
  if (error) {
    console.log ("ERROR", error);
  } else {
    console.log(`Download and saved ${response.headers["content-length"]} to ${filePath}`)
    }
  });
});
