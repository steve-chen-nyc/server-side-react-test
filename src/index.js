const express = require("express");
const expressReactViews = require("express-react-views");
const app = express();
const routes = require("./routes");
const api = require("./routes/api");
const path = require ('path');

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "jsx");
app.engine("jsx", expressReactViews.createEngine());

app.use(express.static("public"));
app.use(express.static("dist"));
app.use('/api', api);

app.get('/', routes.index);
app.get('/foo', routes.foo)

app.listen("3000", () => {
    console.log("listening on port 3000")
});
