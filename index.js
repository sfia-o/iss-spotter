const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

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