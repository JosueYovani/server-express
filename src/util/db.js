const mongoose = require("mongoose");

/** Imports **/
const { DB } = require("../../config");

const URI = `mongodb+srv://${DB.USER}:${DB.PASS}@${DB.HOST}/${DB.NAME}`;

module.exports = {
  connect: () => {
    console.log(`Connection established: ${DB.HOST}`);
    return mongoose.connect(URI, { retryWrites: true });
  },
};
