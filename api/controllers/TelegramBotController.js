"use strict";

const TelegramBot = require('node-telegram-bot-api');

module.exports = {
  getResponse: function (req, res) {

    var result = {};

    console.log('<== TelegramBotController:getResponse ==>');

    // console.log('Telegram Token: ' + sails.config.TOKEN);

    const bot = new TelegramBot(sails.config.TOKEN, {
      polling: true
    });

    bot.on('message', (msg) => {
      console.log('Bot got message: ' + msg);
      result['msg'] = msg;
    });


    return res.ok({result: 'ok', data: result});

  },
};
