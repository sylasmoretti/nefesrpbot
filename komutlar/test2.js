const Discord = require('discord.js');
var Jimp = require('jimp');//Asperius Code

exports.run = async (client, message, args) => {

  var user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);//Asperius Code
 if(!user) return message.channel.send(`Lütfen Abone Rolü Verilecek Kullanıcıyı Etiketleyiniz`)
user.roles.add("801039721265627146")
  const embed = new Discord.MessageEmbed()
  .setAuthor("Abone Rolü Verildi") //Asperius Code
  .addField("Abone Rolünü Veren Kişi:", `<@!${message.author.id}>`, true)//Asperius Code
  .addField("Abone Rolü Verilen Kişi:", `<@!${user.id}>`, true)
  .addField("Mesaj Linki", `[Tıkla](https://discord.com/channels/801039674272514048/801902489486098452/${message.id})`, true)//Asperius Code
  client.channels.cache.get("801902489486098452").send(embed)//Asperius Code
}

exports.conf = {
    enabled: true,
    guildOnly: true,
aliases:["a"],//Asperius Code
    permLevel: 0//Asperius Code
}

exports.help = {
name: 'abone',     
description: 'Etiketlediğinin Kişinin Fotoğrafına Wasted Efekti Uygular',     
usage: "wasted @kullanıcı",
}