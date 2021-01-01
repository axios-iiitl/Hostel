const express = require("express");
const app = express();
const user = require("./routes/user");
const admin = require("./routes/admin");
const warden = require("./routes/warden");


const app = express();

app.use(express.json());
app.locals.moment = require("moment");
app.use(cookieParser());
app.use(express.static("./assets"));


app.use("/user", user);
app.use("/admin", admin);
app.use("/warden",warden);