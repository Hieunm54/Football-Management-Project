const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true   
    },
    number: {
        type: Number,
        required: true,
    },
    content: {
        type: String
    },
});

commentSchema.set('timestamps', true);
module.exports = mongoose.model('Comment', commentSchema);