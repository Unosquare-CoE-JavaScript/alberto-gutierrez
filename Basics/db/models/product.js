const { model, Schema } = require(`mongoose`);
const productSchema = new Schema(
  {
    name: String,
    price: Number,
    brand: String,
  },
  {
    timestamps: true,
    toObject: {
      //Util, puedes modificar desde aqui el objeto a entregar...
      //Nota: investigar otros 2 parametros.
      transform: (doc, ret, options) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  },
);
module.exports = model(`Product`, productSchema);
