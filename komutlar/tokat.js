const Discord = require('discord.js')
exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(``)
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    .setTitle('Tokat atma işlemin: ' + doMagicDiceVoodoo()));
    

    function doMagicDiceVoodoo() {
        var rand = ['Eğilerek Tokattan Sıyrıldı','Sol Yanağına Sert Bir Tokat Attın!','Tam Kafasına Sert Bir Tokat Attın','Sağ Yanağına Sert Bir Tokat Attın!','Yana Çekildi Ve Tokattan Sıyrıldı!','Tokat Atacakken Elini Tuttu Ve Atamadın!'];

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
    name: 'tokat',
    description: '1-15 arası sayı atar.',
    usage: 'zar'
}