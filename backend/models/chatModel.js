const mongoose = require('mongoose');

const chatModel =  mongoose.Schema({
    chatName : {type: String, trim: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
}, {
    timestamps: true
});

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
