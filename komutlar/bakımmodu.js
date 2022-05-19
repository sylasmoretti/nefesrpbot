const Discord = require('discord.js')

const db = require('quick.db')

exports.run = (client, message, args) => {

  

  if(message.author.id != "852664807383760975") return message.channel.send("```Bu komutu sadece sahibim kullana bilir görünüşe göre sen sahibim değilsin yada senmisin?!```")

  

  if(!args[0]) return message.channel.send('Doğru kullanım `da!bakım aç/kapat`')

  

  if(args[0] === 'aç') {

    if(db.fetch(`bakimmod`)) return message.channel.send('Zaten açık')

    message.channel.send(' Başarıyla bakım modu açıldı.Bot Bakımda Kullanmayınız! **Birazcık Bakımda Kalacaktır!** @here')

    db.set(`bakimmod`, 'on')

  }

  if(args[0] === 'kapat'){

    if(!db.fetch(`bakimmod`)) return message.channel.send('Zaten kapalı.')

    message.channel.send('Başarıyla bakım modu kapatıldı.Bot Bakımdan Çıktı Kullanabilirsiniz! @here')

    db.delete(`bakimmod`)

  }

  

}

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: [],

  permLevel: 0

}

exports.help = {

  name: 'bakım',

description: 'bakım moduu',

usage: 'yaz',

}