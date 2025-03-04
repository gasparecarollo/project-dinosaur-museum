/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getLongestDinosaur(dinosaurs) { }

//     const noSuchDinosaurExists = {};
//     let oneDinoEatsTheOther = [];
//     let dinoTwins = [];
//     let tallestDino = [];
//     let dinoName = dinosaurs.name;
//     let dinoLength = dinosaurs.lengthInMeters;

//     // X set length === 0 and returned length[0]
//     if (!dinoName || !dinoLength) {
//         return noSuchDinosaurExists
//     };

//     const tallestDino = dinosaurs.sort((dino1, dino2) => {


//         if (dino1.dinoLength > dino2.dinoLength) {
//             return -1;
//         }
//         if (dino1.dinoLength < dino2.dinoLength) {
//             return 1;
//         }

//         return tallestDino;
//     }
//     });
// for (let dinoInfo of dinosaurs) {
//     let dinoHeightInfo = dinoInfo.lengthInMeters;
//     if (dinosaurs.indexOf(dinoHeightInfo) !== -1) {
//         dinoTwins.push(dinoHeightInfo[index])
//     }
//     return dinoTwins
// }
// return oneDinoEatsTheOther;

// let metersToFeetConverter = `${dinoLength} * 3.281 + "feet"`
// let lengthOfDinosaur = `${metersToFeetConverter}`
// let nameOfDinosaur = `${dinoName}`
// let largestOfThePact = { [nameOfDinosaur]: lengthOfDinosaur }

// return largestOfThePact;
// }


// let noSuchDinosaurExists = {};
// let dinoName = dinosaurs.name;
// let dinoLength = dinosaurs.lengthInMeters;
// let tallestDino = null;

// if (!dinoName) {
//   return noSuchDinosaurExists
// }
// const dinosInSizeOrder = dinosaurs.sort((dino1, dino2) => {

//   if (dino1.dinoLength > dino2.dinoLength) {
//     return -1;
//   }
// });
// if (dinoLength > oneDinoEatsTheOther.length) {
//   return tallestDino = dinoLength;
// }
// let metersToFeetConverter = `${dinoLength} * 3.281 + "feet"`
// let lengthOfDinosaur = `${metersToFeetConverter}`
// let nameOfDinosaur = `${dinoName}`
// let largestOfThePact = { [nameOfDinosaur]: lengthOfDinosaur }

// return largestOfThePact;

// function getLongestDinosaur(dinosaurs) {


//   const dinosInSizeOrder = [...dinosaurs].sort((dino1, dino2) => {


//     if (dino1.lengthInMeters > dino2.lengthInMeters) {
//       return -1;
//     }
//     if (dino1.lengthInMeters < dino2.lengthInMeters) {
//       return 1
//     }
//     if (dino1.lengthInMeters === dino2.lengthInMeters) {
//       return 0;
//     }
//   });

//   const tallestDino = dinosInSizeOrder[0];
//   const noSuchDinosaurExists = {};
//   let dinoName = tallestDino.name
//   let dinoLength = tallestDino.lengthInMeters * 3.281
//   let largestOfThePact = { [dinoName]: dinoLength }

//   if (tallestDino.lengthInMeters === 0) {
//     return noSuchDinosaurExists;
//   } else {
//     return largestOfThePact;
//   }
// }
// getLongestDinosaur(exampleDinosaurData)





// const noSuchDinosaurExists = {};
// let oneDinoEatsTheOther = [];
// let dinoName = dinosaurs.name;
// let dinoLength = dinosaurs.lengthInMeters;

// // X set length === 0 and returned length[0]
// if (!dinoName || !dinoLength) {
//   return noSuchDinosaurExists
// };

// let lengthOfDinosaur = `${dinoLength} * 3.281 + "feet"`
// // let lengthOfDinosaur = `${metersToFeetConverter}`
// let nameOfDinosaur = `${dinoName}`
// let largestOfThePact = { [nameOfDinosaur]: lengthOfDinosaur }

// const tallestDino = dinosaurs.sort.slice((dinoHeightInfo) => {


//   if (dinoHeightInfo.dinoLength > dinoHeightInfo.dinoLength) {
//     return -1;
//   }

//   return tallestDino;
// });

// for (let dinoInfo of dinosaurs) {
//   let dinoHeightInfo = dinoInfo.lengthInMeters;
//   if (dinosaurs.indexOf(dinoHeightInfo) !== -1) {
//     dinoTwins.push(dinoHeightInfo[index])
//   }
//   return dinoTwins
// }
// return oneDinoEatsTheOther;



// return largestOfThePact;
// }

//calculator

// let generalAdmissionForChild = 0;
// let childPrice = ticketMenuAndPrices.child;
// let priceForChild = `$${childPrice}`
// let adultPrice = ticketMenuAndPrices.adult;
// let priceForAdult = `$${adultPrice}`
// let seniorPrice = ticketMenuAndPrices.senior;
// let priceForSenior = `$${seniorPrice}`

// if (ticketEntrant === "child") {
//   //console.log(ticketData[ticketEntrant].priceInCents.child)
// }

// if (ticketEntrant === "senior") {
//   return priceForSenior;
// }
// if (ticketEntrant === "adult") {
//   return priceForAdult;
// }
// console.log(ticketMenuAndPrices.child)

getLongestDinosaur(exampleDinosaurData)
/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {

  // let dinoName = dinosaur.name;

  // for (let dinoID of dinosaurs) {
  //     if (!dinoID.dinosaurId === true) {
  //         return `A dinosaur with an ID of ${dinoID.dinosaurId} cannot be found. `
  //     }
  // }
  // if (dinoID.dinosaurId === true) {
  //     return `${dinoName}(${dino.pronunciation}) \n ${dinosaurs.info}. It lived in the ${dinosaurs.period} period, over ${dinosaurs.mya[1]}.`
  // }

}

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
function getDinosaursAliveMya(dinosaurs, mya, key) { }




//const aLabyrinthOfDoors = rooms.find(searchRoomForSecretEntranceWays => searchRoomForSecretEntranceWays === id)

console.log(secretEntranceWays)

// }


// else {
//   dinosaurRoomGuide.connectsTo.forEach(secretEntranceWays => aLabyrinthOfDoors.push(secretEntranceWays))
// };
// for (aLittleDoorFlapForPets of aLabyrinthOfDoors) {
//   rooms.find(lookForTrapDoors => lookForTrapDoors.roomId === aLittleDoorFlapForPets)

//   aDoorThatLeadsToANewDoorWhichLeadsToAnotherDoorWhichLeadsToTheFirstDoorWhichLeadsToADifferentDoorThatLeadsToThePreviousDoorThatLeadsToTheSideDoorThenThroughTheBathroomDoorAndThenOutTheBackDoorAndSoOnAndSoForth.push(loopForTrapDoors.name)
// }
// if (aLabyrinthOfDoors.length === 0) {
//   return whoopsWrongRoom_DidntMeanToWalkInOnYa;
// }
// return aDoorThatLeadsToANewDoorWhichLeadsToAnotherDoorWhichLeadsToTheFirstDoorWhichLeadsToADifferentDoorThatLeadsToThePreviousDoorThatLeadsToTheSideDoorThenThroughTheBathroomDoorAndThenOutTheBackDoorAndSoOnAndSoForth;
// }


//   for (let theIdImLookingForInsideMyWalletThatHasOverEighteenCardSlotsAndSeveralSecretStashCompartments of aLabyrinthOfDoors) {
// if 
//     return thereIsNoRoomForYouInsideThisRoom;


//let theIdImLookingForInsideMyWalletThatHasOverEighteenCardSlotsAndSeveralSecretStashCompartments = adjacentRooms.connectTo;

// if (dinosaurRoomGuide.dinosaurs.includes(thisIdIsForDoorEntryNotToGetIntoBars)) {

// let dinoWorld = [];
// // const roomNextDoor = roomInfo.name
// const adjacentRooms  = roomInfo.connectsTo;
// const searchKeywordByID = dinosaurs.dinosaurId;
// const returnSearchofRoom = rooms.name;
// // Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.


// }
// // else if (searchKeywordByDinosaurs !== returnSearchOfRoom) {
// // }

// console.log(adjacentRooms)
//   const findPinkElephants = songs.find((findTimestreetsPinkElephants => findTimestreetsPinkElephants.title === "Pink Elephants")

// for (let i = 0; i <= rooms.dinosaurs.length; i++) {
//   return arrayofDinoIDsFromRooms.push(rooms.dinosaurs)
// }
// console.log(arrayofDinoIDsFromRooms)
// }

// else if (searchKeywordByDinosaurId === true) {
//   return returnConnectedRooms
// }

//   for (let roomInfo of rooms) {
//     const searchKeywordByRoomID = roomInfo.roomId;
//     const invalidDinoIDSearch = `"Room with ID of ${searchKeywordByDinoID} could not be found."`
//     if (searchKeywordByRoomID)


module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
