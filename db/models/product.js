const { model, Schema } = require(`mongoose`);
const productSchema = new Schema(
  {
    name: String,
    price: Number,
    brand: String,
  },
  { timestamps: true },
);
module.exports = model(`Product`, productSchema);
