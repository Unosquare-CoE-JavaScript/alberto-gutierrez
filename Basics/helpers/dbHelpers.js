const mongoose = require("mongoose");
const { constants } = require("../constants");
module.exports = {
  mongoDataFormatter: (data) => {
    if (!Array.isArray(data)) {
      return data?.toObject();
    }
    return data.map((value) => value.toObject());
  },
  checkById: (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error(constants.databaseMsg.INVALID_ID);
    }
  },
};
