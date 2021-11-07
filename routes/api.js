/**
 * Author: Byung Uk An
 * Date: 2021.11.07
 */

//
// Set ExpressJS router
//
const express = require('express');
const router = express.Router();

//
// Load local data
//
const characters = require('../models/characters');


//////////////////////////////////////////////////////////
// Routing http requests
//////////////////////////////////////////////////////////

// 1. GET /api/characters
router.get('/characters', (req, res) => {
  
  res.send(JSON.stringify(characters));
})

// 2/ GET /api/characters/:id
router.get('/characters/:id', (req, res) => {

  let character = null;
  if(Array.isArray(characters))
    character = characters.find(item => {
    
      // No need to compare for the types, but the values.
      if(req.params.id == item.id) 
        return true;
      else 
        return false;
    })

  res.send(JSON.stringify(character));
})
//////////////////////////////////////////////////////////

module.exports = router;