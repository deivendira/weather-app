const request = require("request");

const geocode = (address, callback) => {
  const geocodeUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiZGVpdmVuZGlyYWJyYWJ1IiwiYSI6ImNsMzlrcjJ1dTAzY3QzcW1vdW1nZ3B2MDYifQ.n11ZZQAOTUsCHPjKm2EoOQ&limit=1";

  request({ url: geocodeUrl, json: true }, (error, { body }) => {
    if (error) {
      callback("check your internet connection", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};
module.exports = geocode;
