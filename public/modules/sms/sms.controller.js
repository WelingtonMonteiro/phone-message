(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', SmsController);

    SmsController.$inject = ['$state', 'toastr', 'SmsService'];

    /* @ngInject */
    function SmsController($state, toastr, SmsService) {
        var vm = this;

        vm.onClick_login = onClick_login;

        vm.user = {
            email: '',
            password: ''
        };


        function onClick_login() {
            angular.element("#loading").removeClass("d-none");


            if (!vm.user) {
                angular.element("#loading").addClass("d-none");
                return toastr.warning("Preencha os campos corretamente!", 'Alerta!')
            }

            if (!vm.user.email) {
                angular.element("#loading").addClass("d-none");
                return toastr.warning("Campo email é obrigatório!", 'Alerta!')
            }

            if (!vm.user.password) {
                angular.element("#loading").addClass("d-none");
                return toastr.warning("Campo de senha é obrigatório!", 'Alerta!')
            }

            if (!validateEmail(vm.user.email)) {
                angular.element("#loading").addClass("d-none");
                return toastr.warning("Email inválido. Digite um email válido!", 'Alerta!')
            }

            if (vm.user.password.length < 6) {
                angular.element("#loading").addClass("d-none");
                return toastr.warning("Senha deve conter no minimo 6 caracteres!", 'Alerta!')
            }


            vm.user.email = vm.user.email.toLowerCase();

            SmsService
                .login(vm.user.email, vm.user.password)
                .then(success, error);

            function success(response) {

                vm.user = jwtHelper.decodeToken(response.data['access_token']);

                if (!vm.user) {
                    toastr.warning('Usuário não encontrado.', 'Alerta!');
                    return $state.go('login');
                }

                if (vm.user.orgEnabledAccess !== "Aprovado") {
                    toastr.warning('Empresa bloqueada, aguardando liberação de um administrador.', 'Alerta!');
                    return $state.go('waiting');
                }

                if (!vm.user.enabledAccess) {
                    toastr.warning('Usuário bloqueado, aguardando aprovação de um administrador.', 'Alerta!');
                    return $state.go('waiting');
                }

                if (window.__env.typeEnv === 'developer') {

                } else if (window.__env.typeEnv === 'production') {
                    rg4js('setUser', {
                        identifier: vm.user.userId,
                        isAnonymous: false,
                        email: vm.user.email,
                        firstName: vm.user.firstName,
                        fullName: vm.user.displayName,
                        typeEnv: window.__env.typeEnv
                    });
                }


                localStorage['_token_econform'] = response.data['access_token'];
                localStorage['organizationId'] = vm.user.organization;
                // localStorage['_tokenExpiration'] = (new Date()).getTime() + response.data['expires_in'] * 1000;

                if (vm.user.finishRegister) {

                    $state.go('dashboard-map')
                } else if (vm.user.typeOrganization === 'organization') {
                    toastr.warning('Por favor, continue seu cadastro', 'Alerta!');
                    $state.go('register-cnpj-single')
                } else if (vm.user.typeOrganization !== 'organization') {
                    toastr.warning('Por favor, continue seu cadastro', 'Alerta!');
                    $state.go('register-cnpj-multiple')
                }

            }

            function error(err) {
                angular.element("#loading").addClass("d-none");
                if (err && err.status === 401) {

                    toastr.error("Chave de acesso inválida, por favor refaça o sms", 'Alerta!');
                    localStorage.removeItem('_token_econform');
                    sessionStorage.clear();
                    $state.go('login')

                } else if (err && err.data)
                    toastr.error(err.data.message, 'Erro!');
                else {
                    toastr.error('Ocorreu um erro inesperado', 'Erro!');
                }
            }
        }

        return vm;
    }
})();