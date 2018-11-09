const Discord = require('discord.js');
const Enmap = require('enmap');
const fs = require('fs');
//const config = require('./config.json');

const client = new Discord.Client();
//client.config = config;

fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split('.')[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if(!file.endsWith('.js')) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split('.')[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(process.env.TOKEN);

// -- events à ajouter --
// ready
// error
// warn
// debug


// ---------------- NOTES ---------------------

/*
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

client.on("ready", () => {
  client.user.setActivity(`on ${client.guilds.size} servers`);
  console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
});

client.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.channels.get("welcome").send(`"${member.user.username}" has joined this server`);
});

client.emit("guildMemberAdd", message.member);

// Kick a single user in the mention

if (command === "kick") {
  let member = message.mentions.members.first();
  member.kick();
}

if(command === "kick") {
  let member = message.mentions.members.first();
  let reason = args.slice(1).join(" ");
  member.kick(reason);
}

if (command === 'spec'){
        message.author.send("See or Change?");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content == "See") {
                message.channel.send("You Want To See Someones Spec OK!");
            } else if (message.content == "Change") {
                message.channel.send("You Want To Change Your Spec OK!");
            }
        })
*/
