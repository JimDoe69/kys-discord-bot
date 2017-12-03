const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on('guildMemberAdd', function(member) {
    member.guild.channels.find('name', 'general').sendMessage(member.toString() + ' Welcome To KYSGaming's Discord, You Are Now A Member!!');

    member.addRole(member.guild.roles.find('name', 'Member'));
});





                          

bot.login('Mzg2NTQ3OTY0NDE3NDA5MDI0.DQT0TA.mPtBKZ8mudLba_BxbeoUUBAIlHc');
