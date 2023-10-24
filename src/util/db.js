const mongoose = require("mongoose");

/** Imports **/
const { DB } = require("../../config");
const URI = `mongodb+srv://${DB.USER}:${DB.PASS}@${DB.HOST}/${DB.NAME}`;
mongoose.set("strictQuery", false);

module.exports = {
  connect: () => {
    console.log(`Connection established: ${DB.HOST}`);
    return mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  },
};
