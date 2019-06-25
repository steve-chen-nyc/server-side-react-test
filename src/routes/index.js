exports.index = function(req, res){
    res.render("index", { title: "index", name: "APP" });
};

exports.foo = function(req, res) {
    res.render("foo", { title: "foo", name: "FOO"})
}
