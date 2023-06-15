const { fetchMyIP} = require('./iss');
const { fetchCoordsByIP } = require('./iss')

fetchMyIP((error, ip) => {
  if (error) {
    console.log('There was an error', error);
    return;
  }

  console.log('IP is: ', ip);
});

fetchCoordsByIP(ip, (error, data) => {
  if (error) {
    console.log('There was an error', error);
    return;
  }

  console.log(data);
});