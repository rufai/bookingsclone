var hotelOne = require("../database/hotels/1.json");
var hotelTwo = require("../database/hotels/2.json");
var hotelThree = require("../database/hotels/3.json");
var hotelFour = require("../database/hotels/4.json");
var hotelFive = require("../database/hotels/5.json");
var hotelSix = require("../database/hotels/6.json");
var hotelSeven = require("../database/hotels/7.json");
var hotelEight = require("../database/hotels/8.json");
var hotelNine = require("../database/hotels/9.json");
var hotelTen = require("../database/hotels/10.json");
var hotelEleven = require("../database/hotels/11.json");
var hotelTwelve = require("../database/hotels/12.json");

const hotels = [
  hotelOne,
  hotelTwo,
  hotelThree,
  hotelFour,
  hotelFive,
  hotelSix,
  hotelSeven,
  hotelEight,
  hotelNine,
  hotelTen,
  hotelEleven,
  hotelTwelve,
];

exports.getAllHotelsInfo = function () {
  return hotels.map((hotel) => hotel.HotelInfo);
};

exports.getHotelReviewById = function (id) {
  return hotels[id].Reviews;
};
