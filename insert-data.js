
/**
 * Author: Byung Uk An
 * Date: 2021.11.07
 */

// Load configuration
 const config = require('dotenv').config();

// Load Mongoose
const mongoose = require('mongoose');

// Set MongoDB URL
const uri = process.env.MONGODB_URL;



async function insertData(){

  // Connect to MongoDB
  await mongoose.connect(
    uri,
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(function(){

    console.log('Connected to DB...')

    // Define Scheme
    const characterSchema = new mongoose.Schema({
      id: Number,
      title: String,
      description: String,
      width: Number,
      height: Number,
      pathURL: String,
      linkURL: String,
      credit: String,
      creditURL: String
    });

    const Character = mongoose.model('Character', characterSchema)

    // Insert character data to Cloud MongoDB
    const characters = require('./models/characters.js');

    characters.forEach(function(charactor) {
      const characterOne = new Character(charactor);
      saveCharacter(characterOne)
      console.log(`ID ${charactor.id} Inserted.`)
    });

    console.log('Done !!!');
  })
  .catch(function(err){
    console.log(err)
  })
  .finally(() => {
    process.exit(1)
  })
}

async function saveCharacter(characterOne){
  await characterOne.save()
}

insertData()
