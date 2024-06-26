"use strict";

const httpStatus = require("http-status-codes"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");

//   Create a routes
//   object to hold
//   route functions. 7.6
const routes = {
  GET: {},
  POST: {}
};
// Create the handle function
// to handle requests. 7.6
exports.handle = (req, res) => {
  try {
    routes[req.method][req.url](req, res);
  } catch (e) {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/error.html", res);
  }
};
// Create the get and
// post functions to
// map route functions. 7.6
exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};
