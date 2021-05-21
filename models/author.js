const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  nationality: String,
});

module.exports = mongoose.model("Author".authorSchema);
