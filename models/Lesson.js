const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true }
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;