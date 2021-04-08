module.exports = {
  mongoDataFormatter: (data) => {
    if (!Array.isArray(data)) {
      return data.toObject();
    }
    return data.map((value) => value.toObject());
  },
};
