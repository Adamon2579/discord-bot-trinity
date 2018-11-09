var calc = require('../calc.js');

exports.run = (client, message, args) => {
  var expr = args.join(' ');
  var val = (expr.length > 0);
  if (val) {
    message.channel.send(calc.calc(expr));
  }
}
