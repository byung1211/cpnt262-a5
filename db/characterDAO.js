/**
 * Author: Byung Uk An
 * Date: 2021.11.08
 */

//
// Data Access Objact fot Character
//
const mongoose = require('mongoose');

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
})

module.exports = Character = mongoose.model('Character', characterSchema);
