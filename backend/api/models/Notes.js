const DataStore = require("nedb-promise");

const Notes = DataStore({
  filename: "../db/Notes.json",
  autoload: true,
});

module.exports = Notes;
