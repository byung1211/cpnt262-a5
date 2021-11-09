/**
 * Author: Byung Uk An
 * Date: 2021.11.08
 */


//
// Connect to the MongoDB
//
const mongoose = require('mongoose')
const MONGODB_URL = process.env.MONGODB_URL

const connectDB = async () => {
  
  await mongoose.connect(
    MONGODB_URL, 
    { useUnifiedTopology: true, useNewUrlParser: true }
  )

  console.log('Connected to the Cloud MongoDB...!')
}

module.exports = connectDB