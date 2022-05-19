const Discord = require('discord.js')
exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(``)
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    .setTitle(doMagicDiceVoodoo()));
    

    function doMagicDiceVoodoo() {
        var rand = ['Eğilerek Yumruktan Sıyrıldı','Sol Yanağına Sert Bir Yumruk Attın!','Yüzünün Ortasına Bir Yumruk Attın','Sağ Yanağına Sert Bir Yumruk Attın!','Yana Çekildi Ve Yumruktan Sıyrıldı!','Yumruğu Atacakken Elini Tuttu Ve Atamadın!'];

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
    name: 'yumruk',
    description: 'yumruk atarsınız',
    usage: 'yumruk'
}