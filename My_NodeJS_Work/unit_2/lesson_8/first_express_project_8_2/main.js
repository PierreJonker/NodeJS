"use strict";

const port = 3000,
  express = require("express"),
  app = express(); //Assign the express application to the app constant.
app
  .get("/", (req, res) => {  // Set up a GET route for the home page.
  console.log("Request Parms: " , req.params);
  console.log("Resquest Body: ",req.body);
  console.log("Request Url: ",req.url); //Access request parameters. Listing 8.2 Example
  console.log("Request Query: ", req.query);
    
    res.send("Hello, Universe!"); //Issue a response from the server to the client with res.send.
  })
  .listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
  });
// Set up the application to listen at port 3000.