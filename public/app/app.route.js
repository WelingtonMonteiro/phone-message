(function () {
    angular
        .module('app')
        .config(AppRoute)
        .run(AppRun);

    AppRoute.$inject = ['$urlRouterProvider', '$httpProvider', '$qProvider', '$stateProvider'];

    function AppRoute($urlRouterProvider, $httpProvider, $qProvider) {
        $qProvider.errorOnUnhandledRejections(false);


        $urlRouterProvider.otherwise("/");
        //initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        // extra
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
    }


    AppRun.$inject = ['$rootScope', '$location', '$state', 'jwtHelper'];

    function AppRun($rootScope, $location, $state) {


    }
})();