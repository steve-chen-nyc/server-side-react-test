import models from "../models";

export const index = async function(req, res) {
  let users = await models.User.findAll();

  res.render("index", { title: "index", name: "APP", users: users });
};

export const user = async function(req, res) {
  const id = req.params.id;
  const user = await models.User.findById(id);

  res.render("user", { title: "user", user: user });
};

export const foo = function(req, res) {
  res.render("foo", { title: "foo", name: "FOO" });
};
