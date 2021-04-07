const mongoose = require("mongoose");

async function DbInit() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (e) {
    throw new Error(e);
  }
}
module.exports = DbInit;
