exports.run = (client, message, args) => {
  var msg = args.join(' ');
  //message.delete().catch(console.error);
  message.channel.send(msg).catch(console.error);
}
