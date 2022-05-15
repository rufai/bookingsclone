var hotelOne = require("../database/hotels/1.json");
var hotelTwo = require("../database/hotels/2.json");
var hotelThree = require("../database/hotels/3.json");
var hotelFour = require("../database/hotels/4.json");

const hotels = [
  hotelOne,
  hotelTwo,
  hotelThree,
  hotelFour,
];

exports.getAllHotelsInfo = function () {
  return hotels.map(hotel => hotel.HotelInfo);
};

exports.getHotelReviewById = function (id) {

  return hotels[id].Reviews
};
