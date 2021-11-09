/**
 * Author: Byung Uk An
 * Date: 2021.11.07
 */

// Load configuration
const config = require('dotenv').config();


// Set MongoDB URL
const uri = process.env.MONGODB_URL;


//
// Set ExpressJS router
//
const express = require('express');
const router = express.Router();

//
// Load local data
//
const characters = require('../models/characters');

//
// From Cloud MongoDB
//
const mongoose = require('mongoose');
const Character = require('../db/characterDAO');



//////////////////////////////////////////////////////////
// Routing http requests
//////////////////////////////////////////////////////////


// 1. GET /api/characters
router.get('/characters', async (req, res) => {
  
    //////////////////////////////////////////
  // Get data from the local
  //////////////////////////////////////////

  // res.send(JSON.stringify(characters));

  //////////////////////////////////////////
  // From the Cloud MongoDB
  //////////////////////////////////////////
  try{

    const data = await Character.find()
    if (!data) {
      throw new Error()
    }
  
    res.send(data)

  }catch(error){
    res.send({ERROR: 'No Data Found'})
  }
})


// 2/ GET /api/characters/:id
router.get('/characters/:id', async (req, res) => {

  let character = null;
  
  //////////////////////////////////////////
  // From the local
  //////////////////////////////////////////
  // if(Array.isArray(characters)){
  //   character = characters.find(item => {
    
  //     // No need to compare for the types, but the values.
  //     if(req.params.id == item.id) 
  //       return true;
  //     else 
  //       return false;
  //   })
  // }
  // res.send(JSON.stringify(character));


  //////////////////////////////////////////
  // From the Cloud MongoDB
  //////////////////////////////////////////
  try{

    const data = await Character.findOne({id: req.params.id})
    if (!data) {
      throw new Error()
    }
  
    res.send(data)

  }catch(error){
    res.send({ERROR: 'No Data Found'})
  }
})

module.exports = router;