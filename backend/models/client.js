const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const clientSchema = mongoose.Schema({
    telephone : Number,
    password : String,
    nom : String,
    prenom : String,
    
});
clientSchema.plugin(uniqueValidator);
// Model Name "User" => PascalCase
const user = mongoose.model("Client",clientSchema);
module.exports = user;