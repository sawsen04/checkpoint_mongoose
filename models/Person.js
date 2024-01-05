const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: {
    type: String,
    required: [true, "the name field is required"],
  },
  age: Number,
  favoriteFoods: [String],
});

module.exports = Person = mongoose.model("persons", personSchema);
