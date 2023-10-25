const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        require: [true, "Name is required!"],
        trim: true,
        maxlenght: [25, "Name should not more than 25 characters!"]
    },
    email: {
        type: String,
        require: [true, "Email is Required!"],
        unique: true
    }
})

module.exports = mongoose.model("User", userSchema)