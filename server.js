/**
 * Author: Byung Uk An
 * Date: 2021.11.07
 */

//
// Import modules
//
const config = require('dotenv').config()
const connectDB = require('./db/connectDB')
const express = require('express')
const app = express()


//
// Set the root directory for static contents
//
app.use(express.static('public'))


//
// Set routes for the end points
//

const api = require('./routes/api.js')
app.use('/api', api)


//
// Wrong url handling
//
app.use((req, res) => {

  // Set 404 error code to the response
  res.status(404)

  if (req.url.startsWith('/api')) {

    // Send the JSON error response
    res.send({Error: '404 Not Found'})
  } else {

    // Redirect to the 404 error page
    res.redirect('404error.html');
  }
});

// Start server
try {
  
  // Make Connection to MongoDB 
  connectDB().then(() => {

    // Run Application Server
    const port = process.env.PORT || 3000;
    
    app.listen(port, function(){
      console.log(`Listening on port ${port}`);
    });
  });

}catch(error){
  Console.log(error.stack);
}

