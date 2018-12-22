/*
 * Request handlers
 *
 */

// Dependencies
const users = require("./users");
const tokens = require("./tokens");
const menus = require("./menus");
const carts = require("./carts");
const orders = require("./orders");

// Define the handlers
const handlers = {
  users,
  tokens,
  menus,
  carts,
  orders,
  ping(data, callback) {
    callback(200);
  },
  notFound(data, callback) {
    callback(404);
  }
};

// Export the module
module.exports = handlers;
