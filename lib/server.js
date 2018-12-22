/*
 * Server-related tasks
 *
 */

// Dependencies
const http = require("http");
const https = require("https");
const fs = require("fs");
const url = require("url");
const path = require("path");
const StringDecoder = require("string_decoder").StringDecoder;
const config = require("./config");
const helpers = require("./helpers");
const handlers = require("./handlers");

// Instantiate the server module object
const server = {};

// Instantiate the HTTP server
server.httpServer = http.createServer((req, res) =>
  server.unifiedServer(req, res)
);

// Instantiate the HTTPS server
server.httpsServerOptions = {
  key: fs.readFileSync(path.join(__dirname, "/../https/key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "/../https/cert.pem"))
};
server.httpsServer = https.createServer(server.httpsServerOptions, (req, res) =>
  server.unifiedServer(req, res)
);

// All the server logic for both the http and https server
server.unifiedServer = (req, res) => {
  // Get the URL an parse it
  const parsedUrl = url.parse(req.url, true);

  // Get the path
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");

  // Get the query string as an object
  const queryStringObject = parsedUrl.query;

  // Get the HTTP Method
  const method = req.method.toLowerCase();

  // Get the header as an object
  const headers = req.headers;

  // Get the payload, if any
  const decoder = new StringDecoder("utf8");
  let buffer = "";
  req.on("data", data => (buffer += decoder.write(data)));
  req.on("end", () => {
    buffer += decoder.end();

    // Choose the handler this request should go to. If one is not found, use notFound handler
    const chosenHandler =
      typeof server.router[trimmedPath] !== "undefined"
        ? server.router[trimmedPath]
        : handlers.notFound;

    // Construct the data object to send to the handler
    const data = {
      trimmedPath,
      queryStringObject,
      method,
      headers,
      payload: helpers.parseJsonToObject(buffer)
    };

    // Route the request to the handler specified in the router
    chosenHandler(data, (statusCode, payload) => {
      // Use the status code called back by the handler, or the default to 200
      statusCode = typeof statusCode == "number" ? statusCode : 200;

      // Use the payload called back by the handler, or default to empty object
      payload = typeof payload == "object" ? payload : {};

      // Convert the payload to a string
      const payloadString = JSON.stringify(payload);

      // Return the response
      res.setHeader("Content-Type", "application/json");
      res.writeHead(statusCode);
      res.end(payloadString);

      // If the response is 200, print green otherwise print red
      if (statusCode == 200) {
        console.log(
          "\x1b[32m%s\x1b[0m",
          `${method.toUpperCase()} /${trimmedPath} ${statusCode}`
        );
      } else {
        console.log(
          "\x1b[31m%s\x1b[0m",
          `${method.toUpperCase()} /${trimmedPath} ${statusCode}`
        );
      }
    });
  });
};

// Define request router
server.router = {
  ping: handlers.ping,
  users: handlers.users,
  tokens: handlers.tokens,
  menus: handlers.menus,
  carts: handlers.carts,
  orders: handlers.orders
};

// Init script
server.init = () => {
  // Start the HTTP server
  server.httpServer.listen(config.httpPort, () => {
    console.log(
      "\x1b[36m%s\x1b[0m",
      `The HTTP server is running on port ${config.httpPort} in ${
        config.envName
      } mode`
    );
  });

  // Start the HTTPS server
  server.httpsServer.listen(config.httpsPort, () => {
    console.log(
      "\x1b[35m%s\x1b[0m",
      `The HTTPS server is running on port ${config.httpsPort} in ${
        config.envName
      } mode`
    );
  });
};

// Export the module
module.exports = server;
