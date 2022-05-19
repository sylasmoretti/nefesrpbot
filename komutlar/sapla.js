const Discord = require('discord.js')
exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(``)
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    .setTitle(doMagicDiceVoodoo()));
    

    function doMagicDiceVoodoo() {
        var rand = ['Elini Tuttu Ve Saplayamadın','Sol Böbreğine Sapladın!','Karnına Sapladın!','Sağ Böbreğine Sapladın!','Yana Çekildi Ve Saplayamadın!','Elini Tutup Sana Saplamaya Çalışıyor Direnmek İçin Zar Atmalısın!'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'sapla',
    description: '1-15 arası sayı atar.',
    usage: 'zar'
}