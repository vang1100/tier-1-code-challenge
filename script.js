// 1. Create a variable named highScore and assign it a number value of 29.

console.log('hello world');

let highScore = 29;

console.log('the high score is:', highScore);

// 2. Make a new empty array called myScrabbleTiles.


let myScrabbleTiles = [];

console.log('this is the empty array', myScrabbleTiles);

// 3. Put these 6 tile objects into myScrabbleTiles.
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/

function addTiles(tile, score) {
let tileObjects = {
  tile: tile,
  score: score,
}
myScrabbleTiles.push(tileObjects);
return myScrabbleTiles;
}

console.log(addTiles('N', 1));

console.log('testing if objects have been added', myScrabbleTiles);

console.log(addTiles('K', 5));

console.log('testing if objects have been added', myScrabbleTiles);


console.log(addTiles('Z', 10));
console.log(addTiles('X', 8));
console.log(addTiles('D', 2));
console.log(addTiles('A', 1));

console.log('all 6 tiles should be added', myScrabbleTiles);

// 4. Remove the last tile from myScrabbleTiles and save it in a variable named removedTile.


let removedTile = [];

function removeLastTile(){
 return removedTile.push(myScrabbleTiles.pop());
  
}

removeLastTile();

console.log('TESTING, DID LAST TILE GET REMOVED?', myScrabbleTiles);
console.log('last tile removed from this array:', removedTile);

// 5. Add the following new tile object to myScrabbleTiles.
/*
  { tile: 'F', score : 4 }
*/

console.log(addTiles('F', 4));

console.log('adding F and 4 tiles', myScrabbleTiles);

// 6. Complete this function. It needs to be given an array of tile objects. The function will use a loop to add up
//    and return the sum of all the scores for a given array of scrabble tiles.

let sumTheScores = 0;

function calculateScore(tiles) {
for (let item of tiles){
  sumTheScores += item.score;
}
}


// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called myScore.


calculateScore(myScrabbleTiles);

 console.log('total sum of scores', sumTheScores);

let myScore = sumTheScores;

console.log('sum should be 30??????', myScore);

//console.log(myScrabbleTiles.length.score);

// function sumOfScores(){
//   for (let numbers of myScrabbleTiles) {
//     console.log('will the sum appear?', numbers.score);
//     //numbers === myScrabbleTiles.score;
//     myScore += numbers.score;
//   }
// }

// sumOfScores();

// console.log('will total score appear??????', myScore);


//console.log('testing', myScore);
// 8. Write code to check whether or not your score is higher than the highScore.
//    If your score is higher, change highScore to the new high score.

function score(){
  if (myScore > highScore) {
    return highScore = myScore;
  }
   
  } 


score();

console.log(highScore);

// DONE!




// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    highScore: typeof highScore !== 'undefined' ? highScore : undefined,
    myScrabbleTiles: typeof myScrabbleTiles !== 'undefined' ? myScrabbleTiles : undefined,
    removedTile: typeof removedTile !== 'undefined' ? removedTile : undefined,
    calculateScore: typeof calculateScore !== 'undefined' ? calculateScore : undefined,
    myScore: typeof myScore !== 'undefined' ? myScore : undefined,
  }
} catch (e) {
  // Do nothing
}
