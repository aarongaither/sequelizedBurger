const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
const exphbs = require("express-handlebars");
const htmlRoutes = require("./controllers/html_controller.js");
const burgerRoutes = require("./controllers/burgers_controller.js");
const customerRoutes = require("./controllers/customer_controller.js");
const db = require("./models")
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", htmlRoutes);
app.use("/", burgerRoutes);
app.use("/", customerRoutes);
app.use(express.static("public"));

db.sequelize.sync().then(() => {
	app.listen(port, () => console.log(`Server listening: Port ${port}`));
})