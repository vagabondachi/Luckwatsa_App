const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const app = express();
const dotenv = require("dotenv"); 
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Treasure = require('./models/Treasure');
const jwt = require('jsonwebtoken');

const corsOptions = {
    origin: "https://luckwatsa-app-server.vercel.app/", 
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE"]
};

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions)); // Use the cors middleware with the specified configuration

dotenv.config();


//Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL) 
    .then(() => {
        app.listen(8800, () => { // Use process.env.PORT for dynamic port binding
        console.log("Server is running on port 8800");
        });
    })
    .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
});


//POST Register
app.post("https://luckwatsa-app-server.vercel.app/register", async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        
        //create new user
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password: hashedPassword
        })
    
        //save user and send res in json
        const user = await newUser.save();
        res.status(200).json(user._id);
    } catch (err) {
        res.status(500).json({err: 'Error signing up'}); 
    }
});

//Get Registered Users
app.get('https://luckwatsa-app-server.vercel.app/register', async(req,res)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({error: 'Error to get users'})
    }
})


//Login
app.post("https://luckwatsa-app-server.vercel.app/login", async (req, res) => {
    try {
    // Find user
    const user = await User.findOne({ username: req.body.username });
    
    if (!user) {
        // No user found with the given username
        return res.status(400).json("Wrong credentials");
    }

    // isate PassValidword
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    
    if (!isPasswordValid) {
        // Password doesn't match
        return res.status(400).json("Wrong credentials");
    }
        const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, { expiresIn:'1hr' })
        res.json({ message: 'Login successful' })
    } catch (error) {
        res.status(500).json({error: 'Error logging in'});
    }
})

//Create Treasure
app.post("/map", async (req, res) => {
    const newTreasure = new Treasure(req.body);
    try {
        const savedTreasure = await newTreasure.save();
        res.status(200).json(savedTreasure);
    } catch (err) {
        res.status(500).json(err); 
    }
});

//Get All Treasures

app.get("/treasures", async(req,res)=>{
    try {
        const treasures = await Treasure.find();
        res.status(200).json(treasures);
    } catch (err) {
        res.status(500).json(err); 
    }
})

app.get("/env", (req, res) => {
    const mapboxAccessToken = process.env.REACT_APP_MAPBOX;
    res.json({
        mapboxAccessToken: mapboxAccessToken
    })
});

module.exports = app
