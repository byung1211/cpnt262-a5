//
// Import modules
//
const config = require('dotenv').config();
const express = require('express');
const app = express();
const characters = require('./models/characters');


//
// End points
//

app.get('/', (req, res) => {
  
  res.send('Hello');
})

// 1. GET /api/characters
app.get('/api/characters', (req, res) => {
  
  res.send(JSON.stringify(characters));
})



// 2/ GET /api/characters/:id
app.get('/api/characters/:id', (req, res) => {

  let character = null;
  if(Array.isArray(characters))
    character = characters.find(item => {
    
      if(req.params.id == item.id) // No need to compare for the types, but the values.
        return true;
      else 
        return false;

    })

  res.send(JSON.stringify(character));
})


//
// Run server
//
const port = process.env.HTTP_PORT || 3000;

app.listen(port, function(){
  console.log(`Listening on port ${port}`);
});
