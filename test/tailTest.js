const tail = require('../tail');
const assertEqual = require('../assertEqual');

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words); 
assertEqual(result.length, words.length - 1);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
