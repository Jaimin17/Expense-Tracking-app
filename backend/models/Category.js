const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    name: {
        type: String,
        required: true
    },
    items: {
        type: Number,
        default: 1
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Category = mongoose.model("category", CategorySchema);
module.exports = Category;
