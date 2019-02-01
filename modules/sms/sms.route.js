let SmsController = require('./sms.controller.js');

module.exports = (app) => {
    app.get('/api/messages', SmsController.getMessages);

    app.post('/api/message', SmsController.sendSms);

    // app.get('/', SmsController.render);
};