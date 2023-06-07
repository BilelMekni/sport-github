// import mongoose module
const mongoose = require("mongoose");
// creat TeamSchema
const teamSchema = mongoose.Schema({
    name : String,
    stadium : String,
    owner : String,
    foundation : Number,
});
// Model Name "Team" => PascalCase
const team = mongoose.model("Team",teamSchema);
//exports model
module.exports = team;