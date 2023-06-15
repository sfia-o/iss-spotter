/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

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
    console.log('anything');
    if (error) {
      console.log('error');
      return callback(error, null);
    }

    if (response.statusCode !== 200) {

      callback(Error(`Status Code ${response.statusCode} when fetching location coordinates. Response: ${body}`), null);
      return;
    }

    let parsedBody = JSON.parse(body);

    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message), null);
      return;      
    }

    const coordinates = {};
    coordinates.latitude = JSON.parse(body).latitude;
    coordinates.longitude = JSON.parse(body).longitude;
    
    callback(null, coordinates);
  })

}

module.exports = { fetchMyIP, fetchCoordsByIP };