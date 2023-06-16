const { nextISSTimesForMyLocation } = require('./iss_promised');

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

nextISSTimesForMyLocation()
.then((times) => {
  print(times);
})
.catch((error) => {
  console.log("It didn't work!", error.message);
});