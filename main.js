const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send(':ping_pong:');  
  if (msg.content === 'everyone') msg.channel.send('@everyone Salut à tous !', { disableEveryone: false });
  if (msg.content === 'noteveryone') msg.channel.send('@everyone (noteveryone), Salut à tous !');
});

client.login('NjU1NDkxODM5MDU0NTc3Njk2.XfVQ0w.YZKxQxyf7-7ha0KJ-P_kVLvhLTs');