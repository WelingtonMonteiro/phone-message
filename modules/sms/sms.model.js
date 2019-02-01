const mongoose = require('mongoose');
const SmsSchema = require('./sms.schema.js');
const SmsModel = mongoose.model('Sms', SmsSchema, 'sms');

module.exports = SmsModel;