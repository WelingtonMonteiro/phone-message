(function () {
    angular
        .module('app.login')
        .config(LoginRoute);

    LoginRoute.$inject = ['$stateProvider'];

    function LoginRoute($stateProvider) {
        $stateProvider.state('login', {
            url: '/',
            templateUrl: "modules/sms/sms.tmp.html",
            controller: 'SmsController',
            controllerAs: 'vm'
        })
    }
})();