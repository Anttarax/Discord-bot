const Discord = require('discord.js');
const client = New Discord.client();

client.on('ready', ()=> {
          console.log('I am ready');
          });
          
client.on('message', message => {
if (message.content === 'ping') {
message .reply('ping');
}
});
client.login(process.env.BOT_TOKEN);
