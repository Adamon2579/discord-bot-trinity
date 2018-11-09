module.exports = (client) => {
  console.log('Bonjour Adamon!');
  console.log("Je suis connectée !");
  console.log("v2.0");
  console.log("<o/\n\n");
  client.user.setActivity('apprendre à faire de beaux messages', { type: 'PLAYING' });
}
