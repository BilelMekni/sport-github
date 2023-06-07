//-----------------------Module Importation ------------//
// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
const { split } = require("ts-node");
const { match } = require("assert");
// import bcrypt module
const bcrypt = require("bcrypt");
// import multer module
const multer = require("multer");
// import path module
const path = require("path");
// import axios module
const axios = require("axios");
// import mongoose module

const mongoose = require("mongoose");
// Connect APP to DB (sportVenusDB)
mongoose.connect('mongodb://127.0.0.1:27017/sportVenusDB');

// ---------------Express Application ---------//
// creates express application
const app = express();

//---------Model Importation-------------///
const Match = require("./models/match");
const Team = require("./models/team");
const Player = require("./models/player");
const User = require("./models/user");
const Client = require("./models/client");
// send JSON responses
app.use(bodyParser.json());
// Get Objects from Request
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
// Folder confiquration
app.use('/images', express.static(path.join('backend/images')));

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
   };
   const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
    error = null;
}
cb(null, 'backend/images')
},
filename: (req, file, cb) => {
const name = file.originalname.toLowerCase().split(' ').join('-');
const extension = MIME_TYPE[file.mimetype];
const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + 
extension;
cb(null, imgName);
}
});
// DB Simulation
let matchesTab = [
    { id: 1, scoreOne: 0, scoreTwo: 1, teamOne: "PSG", teamTwo: "BAY" },
    { id: 2, scoreOne: 0, scoreTwo: 1, teamOne: "TOT", teamTwo: "AC" },
    { id: 3, scoreOne: 2, scoreTwo: 1, teamOne: "EST", teamTwo: "CA" },
    { id: 4, scoreOne: 1, scoreTwo: 2, teamOne: "EST", teamTwo: "CA" },
    { id: 5, scoreOne: 3, scoreTwo: 0, teamOne: "EST", teamTwo: "CA" },
    { id: 6, scoreOne: 0, scoreTwo: 3, teamOne: "EST", teamTwo: "CA" },

];
// DB Simulation player
let playersTab = [
    { id: 1, name: "Mbape", nombre: 7, age: 23, position: "ATK" },
    { id: 2, name: "Ronaldo", nombre: 7, age: 35, position: "ATK" },
    { id: 3, name: "Benzema", nombre: 9, age: 36, position: "ATK" },
];
// DB Simulation team
let teamsTab = [
    { id: 1, name: "salah", stadium: "Arena", owner: "Mohamed", foundation: 1980 },
    { id: 2, name: "Birez", stadium: "Santiago", owner: "Zidane", foundation: 1950 },
    { id: 3, name: "guardiola", stadium: "milano", owner: "maradouna", foundation: 1940 },
];
// DB Simulation user
let usersTab = [
    {
        id: 1, firstName: "bilel", lastName: "mekni", email: "bilelmekni@gmail.com", pwd: "aaaaaa",
        confirmPwd: "aaaaaa", gender: 0, role: "user"
    },
    {
        id: 2, firstName: "aymen", lastName: "mekni", email: "aymenmekni@gmail.com", pwd: "cccccc",
        confirmPwd: "aaaaaa", gender: 0, role: "user"
    },
    {
        id: 3, firstName: "nihed", lastName: "mekni", email: "nihedmekni@gmail.com", pwd: "nnnnnn",
        confirmPwd: "aaaaaa", gender: 1, role: "user"
    },
];
// function generatedId
function generateId(T) {
    let max;
    if (T.length == 0) {
        max = 0;
    } else {
        max = T[0].id;
        for (let i = 1; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id;
            }

        }
    }
    return max + 1;

}

// --------------- Business Logic ------------//
// Business Logic Get All Matches
app.get("/matches", (req, res) => {
    console.log("Here into BL: Get All Matches");
    // res.json({ matches: matchesTab });
    Match.find().then((docs) => {
        console.log("Here data after search all matches", docs);
        res.json({ matches: docs });
    });
});
// Business Logic:Add Match
app.post("/matches", (req, res) => {
    console.log("Here into BL: Add Match", req.body);
    let match = new Match({
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo
    });
    match.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });
        } else {
            res.json({ message: "Error" });
        }
    });
});
// Business Logic:Edit Match
app.put("/matches", (req, res) => {
    console.log("Here into BL: Edit Match");
    let newMatch = req.body;
    console.log("Here new Match", newMatch);
    Match.updateOne({ _id: newMatch._id }, newMatch).then((response) => {
        console.log("Here response after update", response);
        if (response.modifiedCount == 1) {
            res.json({ message: `Match N° ${newMatch._id} : Edited with success` });

        } else {
            res.json({ message: `Not Edited` });

        }
    });


});

// Business Logic:Get Match By ID
app.get("/matches/:x", (req, res) => {
    let id = req.params.x;
    console.log("Here into BL: Get Match By ID", id);
    Match.findOne({ _id: id }).then((doc) => {
        console.log("Here doc", doc);
        doc
            ? res.json({ match: doc })
            : res.json({ message: "Match does not exist" });
    });

    // res.json({ match: matchObj })
}

);
// Business Logic:Delete Match By ID
app.delete("/matches/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete Match By ID", id);
    Match.deleteOne({ _id: id }).then((response) => {
        console.log("Here response after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })

});

  // bl delete all checkbox  
  app.post("/matches",(req,res)=>{
    console.log("here matches");
    let dell = req.body
    console.log("here after delete",dell);
    Match.deleteMany({}).then((doc)=>{
        if (deletedCount == 1) {
            res.json({isDeleted: true})
        } else {
          res.json({isDeleted: true})  
        }
    })
  })

// // Business Logic Search Matches
app.post("/matches/search", (req, res) => {
    let matchObj = req.body;
    console.log("Here object", matchObj);
    let findedMatches = matchesTab.filter((obj) => {
        return (obj.scoreOne == matchObj.scoreOne ||
            obj.scoreTwo == matchObj.scoreTwo ||
            obj.scoreOne == matchObj.scoreOne + matchObj.scoreTwo ||
            obj.scoreTwo == matchObj.scoreOne + matchObj.scoreTwo
        );
    });

    res.json({ matches: findedMatches });
});

//----------------------PLAYER---------------//
// Business Logic Get All Players
app.get("/players", (req, res) => {
    console.log("Here into BL: Get All players");
    // res.json({ players: playersTab });
    Player.find().then((docs) => {
        console.log("Here data after search all players", docs);
        res.json({ players: docs });
    });

});
// Business Logic:Add Player
app.post("/players", (req, res) => {
    console.log("Here into BL: Add Player", req.body);
    let player = new Player({
        name: req.body.name,
        nombre: req.body.nombre,
        age: req.body.age,
        position: req.body.position,
    })
    player.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });
        } else {
            res.json({ message: "Error" });
        }
    })
});
// Business Logic:Edit Player
app.put("/players", (req, res) => {
    console.log("Here into BL: Edit Player");
    let newPlayer = req.body;
    console.log("Here new Player", newPlayer);
    Player.updateOne({ _id: newPlayer._id }, newPlayer).then((response) => {
        console.log("Here response after update", response);
        if (response.modifiedCount == 1) {
            res.json({ message: `Player N° ${newPlayer._id} : Edited with success` });

        } else {
            res.json({ message: `Not Edited` });

        }
    });
});
// Business Logic:Get Player By ID
app.get("/players/:x", (req, res) => {
    let id = req.params.x;
    console.log("Here into BL: Get player By ID",id);
    Player.findOne({ _id: id }).then((doc) => {
        console.log("Here doc", doc);
        doc
            ? res.json({ player: doc })
            : res.json({ message: "Match does not exist" });
    });
});
// Business Logic:Delete Player By ID
app.delete("/players/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete player By ID", id);
    Player.deleteOne({ _id: id }).then((response) => {
        console.log("Here response after delete", response);
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });

        } else {
            res.json({ isDeleted: false });
        }
    })
    // res.json({ isDeleted: isDeleted });
});
/////------------TEAM-------------------//
// Business Logic Get All Teams
app.get("/teams", (req, res) => {
    console.log("Here into BL: Get All teams");
    res.json({ teams: teamsTab });
});
// Business Logic:Add Team
app.post("/teams", (req, res) => {
    console.log("Here into BL: Add Team", req.body);
    let team = new Team({
        name: req.body.name,
        stadium: req.body.stadium,
        owner: req.body.owner,
        foundation: req.body.foundation,
    });
    team.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (doc) {
            res.json({ message: "Added with success" });
        } else {
            res.json({ message: "Error" });
        }
    })
});
// Business Logic:Edit Team
app.put("/teams", (req, res) => {
    console.log("Here into BL: Edit Team");
});
// Business Logic:Get Team By ID
app.get("/teams/:id", (req, res) => {
    console.log("Here into BL: Get team By ID");
});
// Business Logic:Delete Team By ID
app.delete("/teams/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete team By ID", id);
    let isDeleted = false;
    for (let i = 0; i < teamsTab.length; i++) {
        if (teamsTab[i].id == id) {
            teamsTab.splice(i, 1);
            isDeleted = true;
            break;

        }

    }
    res.json({ isDeleted: isDeleted });

});

// ----------------signup-------///
app.post("/users/signup",multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("Here into BL: Signup");
    const url = req.protocol + "://" + req.get("host");
    console.log("URL",url);
    // http://localhost:300
    bcrypt.hash(req.body.pwd, 8).then((cryptedPwd)=>{
        console.log("Here crypted Pwd", cryptedPwd);
    
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: cryptedPwd,
        role: req.body.role,
        gender: req.body.gender, 
        avatar: url + "/images/" + req.file.filename,
    });
    user.save((error, doc) => {
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (error) {
            if (error.errors.email) {
                res.json({ message: "Email exist" });
            }
           
        } else {
            res.json({message: "Added with success" });
            
        }
    });
});
    // let user = req.body;
    // user.id = generateId(usersTab);
    // usersTab.push(user);
    // console.log("Here user Tab", usersTab);
    // res.json({ message: "user Added With Success", isAdded: true });
});

// Business logic : Inscription
app.post("/clients/inscrire", (req, res) => {
    console.log("Here into BL: Inscrire",req.body);
    let client = new Client({
        telephone : req.body.tel,
        password : req.body.pwd,
        nom : req.body.nom,
        prenom : req.body.prenom,
        
    })
    client.save((error,doc)=>{
        console.log("Here error", error);
        console.log("Here doc", doc);
        if (error) {
            
                res.json({ message: "error" });
            
           
        } else {
            res.json({message: "Added with success" });
            
        }
    });
});
// Business Logic Get All CLIENTS
app.get("/clients", (req, res) => {
    console.log("Here into BL: Get All clients");
    // res.json({ matches: matchesTab });
    Client.find().then((docs) => {
        console.log("Here data after search all matches", docs);
        res.json({ clients: docs });
    });
});
// Business Logic:Get clients By ID
app.get("/clients/:x", (req, res) => {
    let id = req.params.x;
    console.log("Here into BL: Get Match By ID", id);
    Client.findOne({ _id: id }).then((doc) => {
        console.log("Here doc", doc);
        doc
            ? res.json({ client: doc })
            : res.json({ message: "Client does not exist" });
    });

    // res.json({ match: matchObj })
}

);
//Business Logic:Edit Client
app.put("/clients", (req, res) => {
    console.log("here into BL:Edit client", req.body);

    Client.updateOne({ _id: req.body._id }, req.body).then(
        (response) => {
            console.log('here is res', response);
            if (response.modifiedCount == 1) {
                res.json({ message: "User is edited with success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});
// Business logic : login
app.post("/users/login",(req,res) =>{
    console.log("Here into login",req.body);
    let user;
    User.findOne({email: req.body.email}).then((doc) =>{
        if (!doc) {
            res.json({msg: "0"});
            
        }
        user = doc;
        return bcrypt.compare(req.body.pwd, doc.password);
    }).then(
        (pwdResponse) =>{
            console.log("here pwdResponse ",pwdResponse);
            if (!pwdResponse) {
                res.json({ msg: "1"});
                
            } else {
                // send user information {id , fName, lName, role}
                let userTosend = {
                    id : user._id,
                    fName: user.firstName,
                    lName: user.lastName,
                    role: user.role,
                };
                res.json({user:userTosend, msg: "2"});
                
            }
        });
});
// Business logic : login
app.post("/clients/login",(req,res) =>{
    let client;
    console.log("Here into login",req.body);
    Client.findOne({telephone: req.body.telephone, pwd: req.body.pwd}).then((doc) =>{
        if (!doc) {
            res.json({msg: "0"});  
        } 
        res.json({ msg:"1"});
        client = doc;
    })
});

// Business Logic Get All users
app.get("/users", (req, res) => {
    console.log("Here into BL: Get All users");
    res.json({ users: usersTab })
});
// Business Logic:Delete Player By ID
app.delete("/users/:id", (req, res) => {
    let id = req.params.id;
    console.log("Here into BL: Delete user By ID", id);
    let isDeleted = false;
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].id == id) {
            usersTab.splice(i, 1);
            isDeleted = true;
            break;

        }

    }
    res.json({ isDeleted: isDeleted });
});
///----- business logic : add city
// app.post("/weather",(req,res)=>{
//     console.log("Here", req.body);
// });
 ///----- business logic : weather (deuxieme methode get)
app.get("/weather/:obj",(req,res)=>{
    console.log("Here Object",JSON.parse(req.params.obj));
    let city = JSON.parse(req.params.obj).city;
    let key="62ee756a34835483299877a61961cafb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    axios.get(apiUrl).then(
        (response)=>{

        console.log("Here weather response",response.data);
        let data = response.data;
        let result = {
            temperature:data.main.temp,
            humidity:data.main.humidity,
            wind : data.wind.speed,
            icone :  `http://openweathermap.org/img/w/${data.weather[0].icon}.png `
        };
        res.json({result : result});
    })
});

//// business logic : Add Comment
app.post("/matches/comment",(req,res)=>{
    console.log("Here comment",req.body);
    let comment = new Comment
});


// ----------------App Exportation ------------//
// make app importable from another files
module.exports = app; 