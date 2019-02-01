const SmsModel = require('./sms.model.js');
const ApiReponseService = require('../../services/api.response.service.js');
const StringService = require('../../services/string.service.js');
const SmsService = require('../../services/sms.service.js');


module.exports = {
    getMessages,
    sendSms,
    render
};


async function getMessages(req, res) {
    try {

        let skip = req.query.skip || 0;
        let limit = req.query.skip || 0;

        let query = { };

        let total = await SmsModel
            .countDocuments(query);

        let result = await SmsModel
            .find(query, {skip: skip * limit, limit: limit})
            .sort({dateTime: -1})
            .lean();

        result = result.forEach(item =>{
            item.messageDecode = SmsService.inputText(item.keyBoardsPressed)
        });

        return ApiReponseService.success(res, {
            Sms: `${total} Sms encontrados`,
            data: result,
            total: total
        });

    } catch (error) {
        return ApiReponseService.error(res, {message: error});
    }
}


async function sendSms(req, res) {
    let data = req.body;

    try {

        let Sms = new SmsModel(data);
        Sms.keyBoardsPressed = SmsService.inputText(Sms.message);
        Sms.userId = StringService.generateObjectId();

        let newSms = await Sms.save();

        return ApiReponseService.success(res, {
            message: `Sms enviado com sucesso`,
            data: newSms,
            total: 1
        });

    } catch (error) {
        return ApiReponseService.error(res, {message: error});
    }
}



async function render(req, res) {
    try {

        return res.render('index')

    } catch (error) {
        return ApiReponseService.error(res, {message: error});
    }
}



