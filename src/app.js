import express from "express";
import expressReactViews from "express-react-views";
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

export default app;
