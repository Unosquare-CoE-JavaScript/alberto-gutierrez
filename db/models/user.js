const { model, Schema } = require(`mongoose`);
const userSchema = new Schema(
  {
    email: String,
    password: String,
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
        delete ret.password;
        return ret;
      },
    },
  },
);
module.exports = model(`User`, userSchema);
