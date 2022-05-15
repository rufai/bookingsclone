var express = require("express");
var router = express.Router();

// router.httpmethod("route", controller)
/**
 * controller
 * 3 parameters
 * req = request  = object = it contains information about the request made by the client = IncomingMessage
 * res = response = object = it contains information( the answer) given by the server back to the client = ServerResponse
 * next = function = after the answer has been, what should happen next
 */
router.get("/", function(req, res,next){
  res.send("Home Page")
})

router.get("/adeyemi", function (req, res, next) {
  // render ==>  allows you to reply the client with html
  // send ==> which allows to send data --- text ( json, css, html ,csv ) img, video, audio
  res.render("index", { title: "Express" });
});
router.post("/adeyemi", function (req, res, next) {
  // res.render("index", { title: "Express" });
  const countryAndCapital = {
    nigeria: "abuja",
    china: "beijin",
    brazil: "brasilia",
    mexico: "mexico city",
  };
  res.send(countryAndCapital);
});

router.put("/adeyemi", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.head("/adeyemi", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.patch("/talabi", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

/**
 * 1)the router is going to accept the request from the client
 * 2) forward/call the request to the appropriate controller
 */
/**
 * The router can only accept a GET request to /adeyemi
 */
