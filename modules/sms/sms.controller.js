const SmsService = require('./sms.service.js');
const ApiResponseService = require('../../services/api.response.service.js');
const StringService = require('../../services/string.service.js');


module.exports = {
    getMessages,
    sendSms,
    render
};


async function getMessages(req, res) {
    let messageId = req.params.messageId;
    let userId = req.params.userId;


    await SmsService.getMessages(req, res);
}


async function sendSms(req, res){
    let data = req.body;

    if(StringService.isEmpty(data)) return ApiResponseService.error(res, {message: "Nenhum dado enviado"});
    if(StringService.isEmpty(data.message)) return ApiResponseService.error(res, {message: "Nenhum dado enviado"});
    await SmsService.sendSms(req, res);
}

async function render(req, res){
    await SmsService.render(req, res);
}

