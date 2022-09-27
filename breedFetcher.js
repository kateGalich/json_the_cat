const request = require('request');
const args = process.argv;
const userInput = args[2];



const url = `https://api.thecatapi.com/v1/breeds/search?q=${userInput}`;


request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("The cat is not found");
    return;
  }
  console.log(data[0].description);


});

