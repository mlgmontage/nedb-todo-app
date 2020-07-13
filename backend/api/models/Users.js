const DataStore = require("nedb-promise");

const Users = DataStore({
  filename: "../db/Users.json",
  autoload: true,
});

module.exports = Users;
