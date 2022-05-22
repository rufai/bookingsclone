var hotelsModel = require("../models/hotelsModel");

exports.index = function (req, res, next) {
  const allHotels = hotelsModel.getAllHotelsInfo();
  // res.send(allHotels)
  res.render("hotels/allHotels", { hotels: allHotels });
};
exports.reviews = function (req, res, next) {
  const { id } = req.params;
  const allReviews = hotelsModel.getHotelReviewById(Number(id));
  const allHotels = hotelsModel.getAllHotelsInfo();

  // res.send(allReviews)
  res.render("hotels/allHotelReviews", {
    hotels: allHotels,
    reviews: allReviews,
  });
};
