"use strict";

const port = 3000,
  express = require("express"),
  app = express();

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json()); // Tell your Express.js application to parse URL-encoded data.

app.use((req, res, next) => { // Create a new post rout for the home page.
  console.log(`request made to: ${req.url}`); //Log the request’s body.
  next();
});

app.post("/", (req, res) => {
  console.log("req.body: ",req.body);
  console.log("req.querry: ",req.query);
  res.send("POST Successful!");
});

app.get("/items/:vegetable", (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
