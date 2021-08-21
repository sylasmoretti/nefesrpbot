const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    const WestraEmbed = new Discord.MessageEmbed();
  WestraEmbed.setColor(0x36393F)
//  WestraEmbed.setAuthor(`Crypto'yu davet ederek sunucunu yapılandır!`)
  WestraEmbed.setDescription(`<a:779108965501632532:874688993185378396>  GVT'yi davet etmek için [buraya](https://discord.com/oauth2/authorize?client_id=843176655827894343&scope=bot&permissions=805314622) tıkla!`)
  message.channel.send(WestraEmbed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["invite"],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
name: "davet",
usage: ""
}