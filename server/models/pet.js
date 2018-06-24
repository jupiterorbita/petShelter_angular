const mongoose = require("mongoose");

var PetSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: [true, "name is required!"],
        minlength: [3, "name must be at least 3 letters "],
        maxlength: [20, "name must be less than 20 letters"]
    },
    type:{
        type: String,
        // required: [true, "type is required!"],
        minlength: [3, "type must be at least 3 letters "],
    },
    description:{
        type: String,
        // required: [true, "type is required!"],
        minlength: [3, "type must be at least 3 letters "],
    },
    skill1:{
        type: String,
    },
    skill2:{
        type: String,
    },
    skill3:{
        type: String,
    },
},
    { timestamps: true }
  );
  
  mongoose.model('Pet', PetSchema); 