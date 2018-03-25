(function () {
  'use strict';

  angular
    .module('Bonanza')
    .controller('HeaderCtrl', HeaderCtrl);

  HeaderCtrl.$inject = ['GeneralConfigService', '$rootScope', '$scope', '$log',
    'lodash', 'toaster'];

  /* @ngInject */
  function HeaderCtrl(GeneralConfigService, $rootScope, $scope, $log,
                      lodash, toaster) {
    var vm = this;
    vm.title = 'HeaderCtrl';
    var _ = lodash;
    var __=GeneralConfigService;

    activate();

    ////////////////

    function activate() {

      vm.navMeny = [
        {
          href: 'home',
          text: 'NAV_HOME',
        },
      ];

      vm.dropdownMenu = [
      ];

    } // activate

  }

})();

