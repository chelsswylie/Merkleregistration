var express = require("express");
var router = express.Router();
var fetchController = require("../controllers/fetch-controller");
router.get("/fetch-data", fetchController.fetchData);
module.exports = router;

// const express = require("express");
// const router = express.Router();
// const Registration = require("../models/registrationmodel");

// router.route("/Registration").post((req, res) => {
//   const firstname = req.body.firstname;
//   const lastname = req.body.lastname;
//   const Address1 = req.body.Address1;
//   const Address2 = req.body.Address2;
//   const City = req.body.City;
//   const State = req.body.State;
//   const ZIP = req.body.ZIP;
//   const Country = req.body.Country;
//   const newRegistration = new Registration({
//     firstname,
//     lastname,
//     Address1,
//     Address2,
//     City,
//     State,
//     ZIP,
//     Country,
//   });
//   newRegistration.save();
// });

// module.exports = router;
