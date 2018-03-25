"use strict";

const _ = require('lodash');

module.exports = {
  loadConfig: function (req, res) {

    console.log('<== ConfigController.js:loadConfig ==>');

    Promise.all([getHost(), getToken()])
      .then(function (data) {

        var result = {};

        _.forEach(data, function (value) {
          _.forEach(value, function (val, key) {
            result[key] = val;
          });
        });

        result['showList'] = {
          en: [
            {
              key: 'any',
              val: 'Any',
            },
            {
              key: 'show',
              val: 'Show',
            },
            {
              key: 'not_show',
              val: 'Do not show',
            },
          ],
          ru: [
            {
              key: 'any',
              val: 'Любой',
            },
            {
              key: 'show',
              val: 'Показывать',
            },
            {
              key: 'not_show',
              val: 'Не показывать',
            },
          ],
        };

        console.log('loadConfig, result:');
        console.dir(result);

        return res.ok({result: 'ok', data: result, token: '123'});
      }, function (reason) {
        console.log('Promise.all error, reason:');
        console.dir(reason);
      });




    /*
    Set of map methods for every table's requests and method to exclude empty elements
     */

    function getHost() {
      // todo: change by setting using Sails config
      return {host: process.env.HOST || 'http://localhost:1337'};
    };

    function getToken() {
      return {token: '123'};
    }; // getToken

  },
};