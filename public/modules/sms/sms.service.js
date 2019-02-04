(function () {
    angular
        .module('app.sms')
        .service('smsService', SmsService);

    SmsService.$inject = ['serviceApi'];

    function SmsService(serviceApi) {
        "use strict";


        return {
            sendSms: (email, password) => {
                return serviceApi.postApi('/message', {email, password})
            },
            listSms: () => {
                return serviceApi.getApi('/messages')
            }
        }
    }
})();