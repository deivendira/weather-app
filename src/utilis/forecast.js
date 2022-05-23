const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    " http://api.weatherstack.com/current?access_key=8b70c4a1f4d130e828d3a8641594fca5&query=" +
    latitude +
    "," +
    longitude;
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("check your internet connectivity", undefined);
    } else if (body.error) {
      callback("Please enter correct location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees out."
      );
    }
  });
};
module.exports = forecast;
