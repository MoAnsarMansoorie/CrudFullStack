// LOGIC, BL
const User = require("../models/userModel")

exports.home = (req, res) => {
    res.status(200).send("This is ToDo App!")
}

exports.createUser = async (req, res) => {
    try {
        const {name, email} = req.body

        // To check all the details
        if(!name || !email){
            throw new Error("Name and Email are required!");
        }

        // check user is exist
        const userExist = await User.findOne({email})
        if(userExist) {
            throw new Error("Email already exists!");
        }

        // Inserting into Database
        const user = await User.create({name, email})
        res.status(201).json({
            success: true,
            message: "User created successfully!",
            user
        })

    } catch (err) {
        console.log(err);
    }
}

exports.getUser = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            success: true,
            message: "User is exists!",
            users
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: "User is not exist!",
            error
        })
    }
}

exports.editUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            message: "User updated successfully!"
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            message: "User deleted successfully!",
            user
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}