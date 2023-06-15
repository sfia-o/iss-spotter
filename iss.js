const request = require('request');

const nextISSTimesForMyLocation = function(callback) {

};

const fetchMyIP = function(callback) {

  request('https://api.ipify.org/?format=json', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};



const fetchCoordsByIP = function(ip, callback) {

  const location = 'http://ipwho.is/' + ip;

  request(location, (error, response, body) => {
    
    if (error) {
      console.log('error');
      return callback(error, null);
    }

    const parsedBody = JSON.parse(body);

    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message), null);
      return;
    }
    
    const coordinates = {
      latitude: parsedBody.latitude,
      longitude: parsedBody.longitude
    };
    
    
    callback(null, coordinates);
    return coordinates;
  });

};

const fetchISSFlyOverTimes = function(coords, callback) {

  const flyOver = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

  request(flyOver, (error, response, body) => {

    if (error) {
      console.log('error');
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching fly over times. Response: ${body}`), null);
      return;
    }

    const times = JSON.parse(body).response;

    callback(null, times);
  });

};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };