
const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
    name : String,
    nombre : Number,
    age : Number,
    position : String,
});
//Model Name "Player" => PascalCase
const player = mongoose.model("Player",playerSchema);

module.exports = player;