let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
const hooks = require('./sms.hooks.js');

let SmsSchema = new Schema({
    userId: {
        type: ObjectId,
        required: true,
        index: true
    },
    message: {
        type: String,
        trim: true,
        required: true
    },
    keyBoardsPressed: {
        type: String,
        trim: true
    },
    messageDecode: {
        type: String,
        trim: true
    },
    to: {
        type: String,
        trim: true,
        defaul: ''
    },
    from: {
        type: String,
        trim: true,
        defaul: ''
    },

    isRead: {
        type: Boolean,
        default: false
    },
    dateTime: {
        type: Date,
        default: Date.now,
        index: true
    }

}, {versionKey: false});

hooks(SmsSchema);

module.exports = SmsSchema;
