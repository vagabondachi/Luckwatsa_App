const mongoose = require("mongoose");

const TreasureSchema = new mongoose.Schema({
    isPrivate: {
        type: Boolean,
        default: false 
    },
    createdByCollaborators: {
        type: Boolean,
        default: false 
    },
    username: {
        type:String,
        require:true,
    },
    title: {
        type:String,
        require:true,
        min:50,
        unique:true
    },
    desc:{
        type:String,
        required: true,
        min:3
    },
    habitat: {
        type: String,
        enum: ["surfacebound", "underwater", "underground"], 
    },
    reward: {
        type: String,
        enum: ["exp", "coins", "item", "mystery"],
        required: true
    },
    lat:{
        type:Number,
        require: true
    },
    long:{
        type:Number,
        require:true
    }
    },
    { timestamps:true }
);

module.exports = mongoose.model("Treasure", TreasureSchema);