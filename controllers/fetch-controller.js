var fetchModel = require("../models/registrationmodel");
module.exports = {
  fetchData: function (req, res) {
    fetchModel.fetchData(function (data) {
      res.render("user-table", { userData: data });
    });
  },
};
