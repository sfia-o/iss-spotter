const { nextISSTimesForMyLocation } = require('./iss');

const print = function(passTimes) {

  for (const time of passTimes) {

    let date = new Date(time.risetime);
    let pstDate = date.toLocaleString('en-US', {
      timeZone: "America/Vancouver"
    });
    let duration = time.duration;
    console.log(`Next pass at ${pstDate} for ${duration}!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  print(passTimes);
});
