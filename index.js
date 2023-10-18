/** Imports **/
const { API } = require("./config");
const server = require("./src/server");
const db = require("./src/util/db");

db.connect()
  .then(() => {
    server.listen(API.PORT, () => {
      console.log(`Server running on port: ${API.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Connection failed: ${error.message}`);
    process.exit(1);
  });
