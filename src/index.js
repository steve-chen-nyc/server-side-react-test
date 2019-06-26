const express = require("express");
const expressReactViews = require("express-react-views");
import models, { sequelize } from "./models";
const app = express();
const routes = require("./routes");
const api = require("./routes/api");
const path = require("path");

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "jsx");
app.engine("jsx", expressReactViews.createEngine());

app.use(express.static("public"));
app.use(express.static("dist"));
app.use("/api", api);

app.get("/", routes.index);
app.get("/user/:id", routes.user);
app.get("/foo", routes.foo);

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createUsers();
  }
  app.listen("3000", () => {
    console.log("listening on port 3000");
  });
});

const createUsers = async () => {
  await models.User.create({
    username: "schen"
  });

  await models.User.create({
    username: "totoro"
  });
};
