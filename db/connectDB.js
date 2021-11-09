/**
 * Author: Byung Uk An
 * Date: 2021.11.08
 */


//
// Connect to the MongoDB
//
const mongoose = require('mongoose')
const MONGODB_URL = "mongodb+srv://byung1211:byung1211@cluster0.yv5wq.mongodb.net/cpnt262-a5?retryWrites=true&w=majority"

const connectDB = async () => {
  
  await mongoose.connect(
    MONGODB_URL, 
    { useUnifiedTopology: true, useNewUrlParser: true }
  )

  console.log('Connected to the Cloud MongoDB...!')
}

module.exports = connectDB