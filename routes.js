/*
 * Title: Routes
 * Description: Application Routes
 * Author: Parag Khan
 * Date: 2021-09-06
 *
 */

//dependencies

const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");

const routes = {
  "/sample": sampleHandler,
};

module.exports = routes;
