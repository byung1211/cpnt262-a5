
/**
 * Author: Byung Uk An
 * Date: 2021.11.07
 */

// Load Mongoose
const mongoose = require('mongoose');

// Set MongoDB URL
const uri = "mongodb+srv://byung1211:byung1211@cluster0.yv5wq.mongodb.net/cpnt262-a5?retryWrites=true&w=majority";



async function insertData(){

  // Connect to MongoDB
  await mongoose.connect(
    uri,
    { useUnifiedTopology: true, useNewUrlParser: true },
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
