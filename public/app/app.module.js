var env = {};

// Import variables if present (from env.js)
if(window){
    Object.assign(env, window.__env);
}

(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'toastr',

            'app.services',
            'app.sms',
        ])
        .config(function(toastrConfig) {
            angular.extend(toastrConfig, {
                escapeHtml: true,
                autoDismiss: false,
                containerId: 'toast-container',
                maxOpened: 0,
                newestOnTop: true,
                positionClass: 'toast-top-full-width',
                preventDuplicates: false,
                preventOpenDuplicates: false,
                target: 'body'
            });
        })
        .directive('ngEnter', function () {
            return function (scope, element, attrs) {
                element.bind("keydown keypress", function (event) {
                    if (event.which === 13) {
                        scope.$apply(function () {
                            scope.$eval(attrs.ngEnter);
                        });
                        event.preventDefault();
                    }
                });
            };
        })
        .constant('__env', env);
})();