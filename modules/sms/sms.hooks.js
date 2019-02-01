let SmsService = require('../../services/sms.service');


module.exports = Hooks;

function Hooks(Schema) {
    /**
     * Hooks service
     */


    Schema.index(
        {
            "message": "text",
        },
        {name: "message_search", default_language: "portuguese"}
    );

    Schema.index(
        {
            "from": 1,
            "to": 1
        },
        {name: "from_to"}
    );
}
