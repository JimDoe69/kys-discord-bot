const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('guildMemberAdd', function(member) {
       member.guild.channels.find('name', 'general').sendMessage(member.toString() + ' Welcome To KYSGaming, Have Fun!!');
       member.addRole(member.guild.roles.find('name', 'Member'))   
});


bot.login ("Mzg2NTQ3OTY0NDE3NDA5MDI0.DQh2Uw.xxul1p3AK1VpQm1YTjjRSBRmQaU");
