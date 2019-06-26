import models from "../models";

exports.index = async function(req, res) {
  let users = await models.User.findAll();

  res.render("index", { title: "index", name: "APP", users: users });
};

exports.user = async function(req, res) {
  const id = req.params.id;
  const user = await models.User.findById(id);

  res.render("user", { title: "user", user: user });
};

exports.foo = function(req, res) {
  res.render("foo", { title: "foo", name: "FOO" });
};
