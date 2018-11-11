const mongoose = require('mongoose');
const conversationSchema = mongoose.Schema({
    
});
const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;