/*
 * Title: Sample handler
 * Description: Sample Handler
 * Author: Parag Khan
 * Date: 2021-09-06
 *
 */

//module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  callback(200, {
    message: "This is a sample URL",
  });
};

module.exports = handler;
