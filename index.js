const { fetchMyIP } = require ('./iss');

fetchMyIP((error, ip) => {
  if(error) {
    console.log('There was an error', error);
    return;
  }

  console.log('IP is: ', ip);
});

