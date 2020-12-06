const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/routes.js")

require('./config/connection.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));

app.use('/', router);

app.use((error,req, res, next) => {
    let response = {
        success: false,
        message: "Internal server error",
        error: error
    };
    res.status(500).send(response);
});
app.listen(3000, () => {
    console.log("Listening to PORT 3000");
});
