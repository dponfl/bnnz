(function () {
  'use strict';

  angular
    .module('Bonanza')
    .controller('FooterCtrl', FooterCtrl);

  FooterCtrl.$inject = ['GeneralConfigService', '$rootScope', '$scope', '$log',
    'lodash', 'toaster'];

  /* @ngInject */
  function FooterCtrl(GeneralConfigService, $rootScope, $scope, $log,
                      lodash, toaster) {
    var vm = this;
    vm.title = 'FooterCtrl';
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

      vm.subscription = [
        // {
        //   href: 'http://www.youtube.com',
        //   text: 'FOOTER_SUBSCRIBE_YOUTUBE',
        //   img: '/images/youtube.png',
        // },
        {
          href: 'https://www.facebook.com',
          text: 'FOOTER_SUBSCRIBE_FACEBOOK',
          img: '/images/facebook.png',
        },
        // {
        //   href: 'http://www.instagram.com',
        //   text: 'FOOTER_SUBSCRIBE_INST',
        //   img: '/images/instagram.png',
        // },
      ];

      vm.developer = {
          href: 'http://www.webstudiopro.info',
          text: 'WebStudioPro',
        };

    } // activate

  }

})();

