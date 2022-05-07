const Discord = require('discord.js')
exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('> Sayınız Yukarıda :)')
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    .setTitle('🎲 ZAR SAYISI: ' + doMagicDiceVoodoo()));

    function doMagicDiceVoodoo() {
        var rand = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['zar'],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'zar',
    description: '1-15 arası sayı atar.',
    usage: 'zar'
}