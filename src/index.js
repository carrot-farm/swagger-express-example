import Express from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import api from "./api";

const port = 8080;
const app = Express();

// swagger 설정
const swaggerDocument = {
  swaggerDefinition: {
    info: {
      title: "test swagger",
      version: "1.0.0",
      description: "test api with express"
    },
    localhost: `localhost:${port}`,
    basePath: "/"
  },
  apis: ["./src/api/*.js"]
};
const specs = swaggerJsdoc(swaggerDocument);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// json 파싱
app.use(bodyParser.json());
// utf8 등의 query string
app.use(bodyParser.urlencoded({ extended: false }));
// api route
app.use("/api", api);

app.listen(port, () => {
  console.log(`server listen ${port}`);
});
