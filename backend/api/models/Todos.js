const DataStore = require("nedb-promise");

const Todos = DataStore({
  filename: "../db/Todos.json",
  autoload: true,
});

module.exports = Todos;
