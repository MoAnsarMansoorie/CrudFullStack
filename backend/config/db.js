const mongoose = require("mongoose")

const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {
        console.log(`DB is connected succefullly : ${conn.connection.host}`);
    })
    .catch((err) => {
        console.log(`DB connection is failed`);
        console.log(err);
        process.exit(1)
    })
}

module.exports = connectToDB