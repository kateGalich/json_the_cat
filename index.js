const args = process.argv;
const userInput = args[2];
const breedFetcher = require('./breedFetcher');

breedFetcher.fetchBreedDescription(userInput, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    if (description) {
      console.log(description);

    } else {
      console.log('Cat not found');
    }
  }
});


