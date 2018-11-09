const summonerstest = require('../summonerstest.js');

exports.run = (client, message, args) => {
  var summonersMap = summonerstest.createMap();
  var range = summonersMap.length;
  var index = Math.floor(Math.random()*range);
  var monster = summonersMap[index][0];
  var reponse = summonersMap[index][1];

  /*
  message.author.send("See or Change?");
  const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 });
  console.log(collector)
  collector.on('collect', message => {
      if (message.content == reponse) {
          message.channel.send("GG!");
          return;
      } else if (message.content == "skip") {
          message.channel.send("Better luck next time, the answer was : '+reponse");
          return;
      }
  })
  */

  message.channel.send('What\'s the awakened form of '+monster+'\'s name ?').then(() => {
    message.channel.awaitMessages(response => (response.content === reponse), {
      max: 1,
      time: 10000,
      errors: ['time'],
    })
    .then((collected) => {
      message.channel.send('GG!');
    })
    .catch(() => {
      message.channel.send('Better luck next time, the answer was : '+reponse);
    });
  });
}
