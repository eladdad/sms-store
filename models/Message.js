const mongoose = require('mongoose');

const schema = mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    payload: {
        type: String,
        required:true
    }
});
  
var Message = mongoose.model('Message', schema);

module.exports = Message;