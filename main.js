const express = require("express");
const cors = require("cors");
const dbConnection = require("./db/connection");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

dbConnection();
console.clear();
//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//groups
app.use(`/api/v1/products`, productRoutes);
app.use(`/api/v1/users`, userRoutes);

//Error handler
app.use((err, request, response, next) => {
  console.error("Something broke", err.stack);
  response.status(500).send({ status: 500, message: err.message, body: {} });
});

//paths
app.get("/", (request, response, next) => {
  response.send("hola");
});

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
