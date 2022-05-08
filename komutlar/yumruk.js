const Discord = require('discord.js')
  exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kime Yumruk Atacağını Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`${mesaj} ` + message.author.username + doMagicDiceVoodoo())
        .setImage(`https://cdn.discordapp.com/attachments/972611350285148240/972615692320915526/bir-sozluk-yazarina-tokat-atma-istegi_2083571.gif?size=4096`)
   
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