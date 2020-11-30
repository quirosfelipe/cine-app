const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config(); //load ENV variables

// bring routes
const likeRoutes = require("./routes/like");

//app
const app = express();

//middlewares
// app.use(express.json());
// app.use(express.urlencoded());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//port
const port = process.env.PORT || 8000;

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo Connected"))
  .catch((e) => console.log(e));

// Handler for client build
if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

//cors
if (process.env.NODE_ENV === "production") {
  https: app.use(cors({ origin: "https://cine--app.herokuapp.com" }));
  // https: app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// routes middleware
app.use("/api", likeRoutes);

// //routes
// app.get("/api", (req, res) => {
//   res.json({ time: Date().toString() });
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
