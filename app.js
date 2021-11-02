let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

let playersRouter = require("./routes/players");
let detailsRouter = require("./routes/details");

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/players", playersRouter);
app.use("/details", detailsRouter);

module.exports = app;
