/*
 * Title: Handle Request Response
 * Description: Handle Request and Response
 * Author: Parag Khan
 * Date: 2021-09-06
 *
 */

//dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const {
  notFoundHandler,
} = require("../handlers/routeHandlers/notFoundHandler");

//module scaffolding
const handler = {};

//handle request Response
handler.handleReqRes = (req, res) => {
  //request handling
  //get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  const requestProperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject,
  };

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();

    const chosenHandler = routes[trimmedPath] ?? notFoundHandler;

    chosenHandler(requestProperties, (statusCode, payload) => {
      statusCode = typeof statusCode === "number" ? statusCode : 500;
      payload = typeof payload === "object" ? payload : {};

      const payloadString = JSON.stringify(payload);

      console.log(payload);

      //return the final response
      res.writeHead(statusCode);
      res.end(payloadString);
    });
  });
  //response handling
  res.end();
};

module.exports = handler;
