import app from "./app";
import models, { sequelize } from "./models";

const createUsers = async () => {
  await models.User.create({
    username: "schen"
  });

  await models.User.create({
    username: "totoro"
  });
};

const eraseDatabaseOnSync = true;

const server = sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createUsers();
  }
  app.listen("3000", () => {
    console.log("listening on port 3000");
  });
});
