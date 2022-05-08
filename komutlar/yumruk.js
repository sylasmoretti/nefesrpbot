const Discord = require('discord.js')
exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('> Sayınız Yukarıda :)')
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    .setTitle('Yumruk atma işlemin: ' + doMagicDiceVoodoo()));

    function doMagicDiceVoodoo() {
        var rand = ['Eğilerek Yumruktan Sıyrıldı','Sol Yanağına Sert Bir Yumruk Attın!','Yüzünün Ortasına Bir Yumruk Attın ve Bayılttın!','Sağ Yanağına Sert Bir Yumruk Attın!'];

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
    description: '1-15 arası sayı atar.',
    usage: 'zar'
}