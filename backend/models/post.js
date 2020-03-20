const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  time: String,
  avatar: String,
  type: String,
  data: {
    text: {
      type: Schema.Types.String,
      required: false
    },
    src: {
      type: Schema.Types.String,
      required: false
    },
    desc: {
      type: Schema.Types.String,
      required: false
    },
    images: {
      type: [Schema.Types.String],
      required: false
    },
    questions: {
      type: [Schema.Types.String],
      required: false
    },
    type: {
      type: Schema.Types.Array,
      required: false
    }
  }
});

module.exports = mongoose.model("Book", bookSchema);
