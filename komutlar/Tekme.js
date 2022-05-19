const Discord = require('discord.js')
exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(``)
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    .setTitle('Tekme atma işlemin: ' + doMagicDiceVoodoo()));
    

    function doMagicDiceVoodoo() {
        var rand = ['Yana Çekilerek Tekmeden Sıyrıldı','Sol Bacağına Sert Bir Tekme Attın!','Özel Bölgesine Tekme Attın','Sağ Bacağına Sert Bir Tekme Attın!','Yana Çekildi Ve Tekmeden Sıyrıldı!','Tekme Atacakken Ayağını Tuttu Ve Atamadın!'];

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
    name: 'tekme',
    description: '1-15 arası sayı atar.',
    usage: 'zar'
}