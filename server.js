const express = require("express");
const app = express();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
var cors = require("cors");
const controllers = require("./controllers/user");

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "To Do List",
      description: "API Service To Do List",
      servers: ["http://localhost:3000"],
    },
  },
  apis: ["server.js", "./controllers/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

controllers.setup(app);
app.listen(3000, () => {
  console.log(
    "Application is running on http://localhost:3000 and swagger doc on http://localhost:3000/api-docs"
  );
});
