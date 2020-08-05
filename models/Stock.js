const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  // sector: { type: String },
  symbol: { type: String, required: true },
  description: {},
  historical: {
    type: Schema.Types.Mixed
  },
  performance: { type: Number }
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
