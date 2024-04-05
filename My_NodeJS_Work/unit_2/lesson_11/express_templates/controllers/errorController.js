"use strict";

const httpStatus = require("http-status-codes");

// Add middleware to handle errors. 11.2
exports.logErrors = (error, req, res, next) => {
  console.error(error.stack); // Log the error stack.
  next(error); // Pass the error to the next middleware function.
};

// Respond with a 404 status code. 11.3
exports.respondNoResourceFound = (req, res) => { //Respond with a custom error page.
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.sendFile(`./public/${errorCode}.html`, { //Send content in 404.html. 11.5
    root: "./"
  });
};

// Catch all errors and respond with a 500 status code. 11.3
exports.respondInternalError = (error, req, res, next) => {
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
};
