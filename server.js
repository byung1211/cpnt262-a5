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

// 1. GET /api/characters
app.get('/api/characters', (req, res) => {

})



// 2/ GET /api/characters/:id
app.get('/api/characters/:Id', (req, res) => {
  
})


//
// Run server
//
const port = process.env.HTTP_PORT || 3000;

app.listen(port, function(){
  console.log(`Listening on port ${port}`);
});
