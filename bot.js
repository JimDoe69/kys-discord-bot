const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('guildMemberAdd', function(member) {
       member.guild.channels.find('name', 'general').sendMessage(member.toString() + ' Welcome To Our Discord, You Are Now A Member!!');
       member.addRole(member.guild.roles.find('name', 'Member'))   
});

 


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
