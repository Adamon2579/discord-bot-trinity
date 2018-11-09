exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 0xc32aed,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Besoin d'un peu d'aide ? :smile:",
    //pour mettre un lien dans le titre
    //url: "http://google.com",
    description: "Voici la liste des commandes que je connais :",
    fields: [{
      name: "help",
      value: "Une explication de cette commande n'est pas réellement nécéssaire. Si ?"
    },
    {
      name: "Ping",
      value: "Pong !"
    },
    {
      name: "Say",
      value: "Pour me faire dire n'importe quoi :yum:"
    },
    {
      name: "Roll",
      value: "Pour montrer au MJ qui est le boss :sunglasses:"
    },
    {
      name: "Calc",
      value: "Et oui je fais aussi calculatrice !"
    },
    {
      name: "summonerstest",
      value: "Pour tester votre connaissance de ce super jeu !"
    }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Trinity v2.0"
    }
  }});
}
