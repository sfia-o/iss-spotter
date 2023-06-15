const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('There was an error', error);
//     return;
//   }

//   console.log('IP is: ', ip);
// });

// fetchCoordsByIP('173.181.51.41', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log(`Here are the IP's coordinates: `, coordinates);
// });

// fetchISSFlyOverTimes({latitude: 48.4284207, longitude: -123.3656444}, (error, coords) => {
//   if (error) {
//     console.log(("it didn't work!", error));
//     return;
//   }

//   console.log(coords);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});
