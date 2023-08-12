const mongoose = require('mongoose');

const connectToDb=async()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log(`connected to db ${conn.Connection.host}`);
    })
    .catch((error)=>{
        console.log(error);
        process.exit(1);
    })
}

module.exports=connectToDb;