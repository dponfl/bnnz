"use strict";

  console.log('Bonanza bootstrap...');

  $.get('/config', config);

  config.$inject = ['data'];

  function config(data) {
    console.log('Bonanza bootstrap, config data:');
    console.log(data);


    angular.module('Bonanza')
      .config(BonanzaConfiguration);

    BonanzaConfiguration.$inject = ['configBonanzaProvider', 'lodash'];

    function BonanzaConfiguration(configBonanzaProvider, lodash) {

      var _ = lodash;

      console.log('BonanzaConfiguration...');
      console.log(data);

      if (_.has(data, 'result') && _.has(data, 'data')) {
        if (data.result == 'ok') {
          configBonanzaProvider.initialize(data.data);
        }

        if (_.has(data.data, 'token')) {
          var jwtToken = data.data.token;
        }
      }

    } // BonanzaConfiguration

    angular.bootstrap(document, ['Bonanza']);
}

