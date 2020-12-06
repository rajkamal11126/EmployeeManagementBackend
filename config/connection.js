const config = require('./mongoDbConfig');
const mongoose = require('mongoose');
mongoose.connect(config.url).then(() =>{
    console.log("connection established success");
}).catch((error) => {
    console.log("failed to connect database", error);
})