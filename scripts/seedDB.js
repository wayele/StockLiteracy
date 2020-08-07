const mongoose = require("mongoose");
const db = require("../models");
const dataSeed = require("./stockSeed");
const lessons = require("./lessonsSeed");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://heroku_7zxx3ffc:2hne8u9d2v88e5tb06nh0a4582@ds143231.mlab.com:43231/heroku_7zxx3ffc"
);


const transformedStocks = dataSeed.map((ds) => {

    const performance = ds.historical[11].close - ds.historical[0].close;
    return {
        ...ds,
        performance,
    }
})

db.Stock
    .remove({})
    .then(() => db.Stock.collection.insertMany(transformedStocks))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Lesson
    .remove({})
    .then(() => db.Lesson.collection.insertMany(lessons))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
