const placard = require('../placard.js')

exports.run = (client, message, args) => {
  var msg = args.join(' ');
  var rollRes = placard.roll(msg.toLowerCase());
  if (typeof rollRes === "string") {
    message.channel.send(rollRes);
  }
  else {
    var resTotal = rollRes.reduce((a, b)=> a+b, 0);
    message.channel.send(rollRes+'\nTotal : '+resTotal);
  }
}
