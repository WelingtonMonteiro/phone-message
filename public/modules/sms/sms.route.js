(function () {
    angular
        .module('app.sms')
        .config(LoginRoute);

    LoginRoute.$inject = ['$stateProvider'];

    function LoginRoute($stateProvider) {
        $stateProvider.state('sms', {
            url: '/',
            templateUrl: "modules/sms/sms.tmp.html",
            controller: 'SmsController',
            controllerAs: 'vm'
        })
    }
})();