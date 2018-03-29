// "use strict";
//
// const TelegramBot = require('node-telegram-bot-api');
//
// const bot = new TelegramBot(sails.config.TOKEN, {
//   polling: true
// });
//
// module.exports = {
//   getResponse: function (req, res) {
//
//     var result = {test: 'test'};
//
//     console.log('<== TelegramBotController:getResponse ==>');
//
//     // console.log('Telegram Token: ' + sails.config.TOKEN);
//
//
//
//     bot.on('message', (msg) => {
//
//       console.log('Bot got message:');
//       console.dir(msg);
//
//       bot.sendMessage(msg.chat.id, 'Здравствуй, ' + msg.from.first_name);
//     });
//
//
//     return res.ok({result: 'ok', data: result});
//
//   },
// };
