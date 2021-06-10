const Discord = require('discord.js');
var Jimp = require('jimp');

exports.run = async (client, message, args) => {

  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        Jimp.read(user.displayAvatarURL({format: "png"}), (err, image) => {
            image.resize(720, 720)
            image.greyscale()
            image.gaussian(3)
            Jimp.read("https://i.imgur.com/3CEbrNr.png%22", (err, avatar) => {
                avatar.resize(720, 720)
                image.composite(avatar, 4, 0).write(`./img//${client.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.MessageAttachment(`./img/azerbeycan/${client.user.id}-${user.id}.png`));
                }, 1000);
          message.channel.stopTyping();
            });
        });
 
}

exports.conf = {
    enabled: true,
    guildOnly: true,
aliases:[],
    permLevel: 0
}

exports.help = {
name: 'azerbeycan',     
description: 'Etiketlediğinin Kişinin Fotoğrafına Wasted Efekti Uygular',     
usage: "wasted @kullanıcı",
}