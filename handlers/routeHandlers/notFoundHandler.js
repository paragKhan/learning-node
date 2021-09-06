/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Parag Khan
 * Date: 2021-09-06
 *
 */

/*
 * Title: Sample handler
 * Description: Sample Handler
 * Author: Parag Khan
 * Date: 2021-09-06
 *
 */

//module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "Your requested URL was not found!",
  });
};

module.exports = handler;
