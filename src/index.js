import express from "express";
import expressReactViews from "express-react-views";
import models, { sequelize } from "./models";
import { index, user, foo } from "./routes";
import api from "./routes/api";
import path from "path";

const app = express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "jsx");
app.engine("jsx", expressReactViews.createEngine());

app.use(express.static("public"));
app.use(express.static("dist"));
app.use("/api", api);

app.get("/", index);
app.get("/users/:id", user);
app.get("/foo", foo);

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
