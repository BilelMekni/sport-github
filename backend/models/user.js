const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email :{type: String, unique: true},
    password : String,
    role : String,
    gender : String,
    avatar : String,
});
userSchema.plugin(uniqueValidator);
// Model Name "User" => PascalCase
const user = mongoose.model("User",userSchema);
module.exports = user;