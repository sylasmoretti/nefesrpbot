const Discord = require('discord.js')
exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(``)
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    .setTitle(doMagicDiceVoodoo()));
    

    function doMagicDiceVoodoo() {
        var rand = ['Eğilerek Mermiden Kaçtı','Karnından Vurdun!','Kafasına Sıktın!','Sağ Omuzuna Geldi!','Omuzunu Sıyırdı!','Duvarın Arkasına Geçti!','Silah Tutukluk Yaptı Ateş Edemedin!','Mermin Bitmiş Kahretsin!','Iskaladın Antreman Yapmalısın!'];

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
    name: 'ateşet',
    description: '1-15 arası sayı atar.',
    usage: 'zar'
}