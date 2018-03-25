"use strict";

const TelegramBot = require('node-telegram-bot-api');

module.exports = {
  getResponse: function (req, res) {

    console.log('<== TelegramBotController:getResponse ==>');

    console.log('Telegram Token: ' + sails.config.TOKEN);

    let result = {
      some: 'some text',
    };

    return res.ok({result: 'ok', data: result});

  },
};
