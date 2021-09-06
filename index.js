/*
 * Title: Uptime Monitoring Application
 * Description: A Restfull API to monitor up or down time of user defined links
 * Author: Parag Khan
 * Date: 2021-09-05
 *
 */

//dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");

//app object
const app = {};

//configuration
app.config = {
  port: 3000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);

  server.listen(app.config.port, () => {
    console.log(`Listening to port: ${app.config.port}`);
  });
};

//handle request Response
app.handleReqRes = handleReqRes;

app.createServer();
