const Discord = require('discord.js');
const client = new Discord.Client();
var ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')

exports.run = async (client, message, args) => {
const soygunlog = db.get(`soygunlog_${message.guild.id}`)
if(!soygunlog) {
    const embed = new Discord.MessageEmbed()
    .setAuthor("Guard", client.user.avatarURL())
    .setDescription(`
    Bir soygun log kanalı ayarlanmamış lütfen ayarlayınız \n -> !soygun-log ayarla #kanal
    `)
    .setFooter("Guard", client.user.avatarURL())
    message.channel.send(embed)
} else {
    let cooldown = 200;
   let dbs = require('quick.db');
    let ms = require("parse-ms");

    let weekly = await dbs.get(`blackmarket_${message.author.id}`);

    if (weekly !== null && cooldown - (Date.now() - weekly) > 0) {
      let time = ms(cooldown - (Date.now() - weekly));

      message.reply(
        `Taksidi yeni bitti **${time.seconds} saniye** beklemelisin`
      );
    } else {
     let dbs = require("quick.db")
  
      let para = (await db.fetch(`bakiye_${message.author.id}`)) || 0;

      let eşyalar = ["deagle", "ak47", "uzi", "bıçak","pompalı","maymuncuk","hackerusb","illegalkart"];
      if (!eşyalar.includes(args[0]))
        return message.channel.send(
          `Black Markette Olan Eşyalar: \`${eşyalar}\``
        );

      if (args[0] === "bıçak") {
        if (para < 50000) {
          message.reply(
            "`Bıçak` almak için 50.000 $ ye ihtiyacın var. Senin paran: **" +
              para +
              "**"
          );
        }

        if (para > 50000) {
          message.reply(
            `Black Marketten **1** adet \`Bıçak\` aldın. Şuanki paran: ${para -
              50000} `
          );
          await db.add(`${message.author.id}.bıçak_adet`, 1);
          await db.set(`bakiye_${message.author.id}`, para -50000);
          dbs.set(`blackmarket_${message.author.id}`, Date.now());
          client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı black marketten \`Bıçak\` satın aldı. Geriye **${para - 50000}**$ kaldı.`)
        }
      }
      
      if (args[0] === "maymuncuk") {
        if (para < 5000) {
          message.reply(
            "`maymuncuk` almak için 50.000 $ ye ihtiyacın var. Senin paran: **" +
              para +
              "**"
          );
        }

        if (para > 5000) {
          message.reply(
            `Black Marketten **1** adet \`maymuncuk\` aldın. Şuanki paran: ${para -
              5000} `
          );
          await db.add(`${message.author.id}.maymuncuk_adet`, 1);
          await db.set(`bakiye_${message.author.id}`, para -5000);
          dbs.set(`blackmarket_${message.author.id}`, Date.now());
          client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı black marketten \`maymuncuk\` satın aldı. Geriye **${para - 5000}**$ kaldı.`)
        }
      }
      if (args[0] === "deagle") {
        if (para < 125000) {
          message.reply(
            "`deagle` almak için 125.000 $ ihtiyacın var. Senin paran: **" +
              para +
              "**"
          );
        }

        if (para > 125000) {
          message.reply(
            `Black marketten **1** adet \`deagle\` aldın. Şuanki paran: ${para -
              125000} `
          );
          await db.add(`${message.author.id}.deagle_adet`, 1);
        await db.set(`bakiye_${message.author.id}`, para - 125000);
          dbs.set(`blackmarket_${message.author.id}`, Date.now());
            client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı black marketten \`deagle\` satın aldı. Geriye **${para - 125000}**$ kaldı.`)
        }
      }
     
      if (args[0] === "illegalkart") {
        if (para < 4000) {
          message.reply(
            "`illegalkart` almak için 4.000 $ ye ihtiyacın var. Senin paran: **" +
              para +
              "**"
          );
        }

        if (para > 4000) {
          message.reply(
            `Black Marketten **1** adet \`illegalkart\` aldın. Şuanki paran: ${para -
              4000} `
          );
          await db.add(`${message.author.id}.illegalkart_adet`, 1);
          await db.set(`bakiye_${message.author.id}`, para -4000);
          dbs.set(`blackmarket_${message.author.id}`, Date.now());
          client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı black marketten \`illegalkart\` satın aldı. Geriye **${para - 4000}**$ kaldı.`)
        }
      }
        if (args[0] === "hackerusb") {
        if (para < 5000) {
          message.reply(
            "`hackerusb` almak için 5000 $ ye ihtiyacın var. Senin paran: **" +
              para +
              "**"
          );
        }

        if (para > 5000) {
          message.reply(
            `Black Marketten **1** adet \`hackerusb\` aldın. Şuanki paran: ${para -
              5000} `
          );
          await db.add(`${message.author.id}.hackerusb_adet`, 1);
          await db.set(`bakiye_${message.author.id}`, para -5000);
          dbs.set(`blackmarket_${message.author.id}`, Date.now());
          client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı black marketten \`hackerusb\` satın aldı. Geriye **${para - 5000}**$ kaldı.`)
        }
      }

      if (args[0] === "uzi") {
        if (para < 300000) {
          message.reply(
            "`Uzi` almak için 300.000 $ ihtiyacın var. Senin paran: **" +
              para +
              "**"
          );
        }

        if (para > 300000) {
          message.reply(
            `Black marketten **1** adet \`Uzi\` aldın. Şuanki paran: ${para -
              300000} `
          );
         await db.add(`${message.author.id}.uzi_adet`, 1);
          await db.set(`bakiye_${message.author.id}`, para - 300000);
          dbs.set(`blackmarket_${message.author.id}`, Date.now());
          client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı black marketten \`Uzi\` satın aldı. Geriye **${para - 300000}**$ kaldı.`)
        }
      }

      if (args[0] === "ak47") {
        if (para < 600000) {
          message.reply(
            "`ak47` almak için 600.000 $ ihtiyacın var. Senin paran: **" +
              para +
              "**"
          );
        }

        if (para > 600000) {
          message.reply(
            `Black Marketten **1** adet \`ak47\` aldın. Şuanki paran: ${para -
              600000} `
          );
          await db.add(`${message.author.id}.ak47_adet`, 1);
          await db.set(`bakiye_${message.author.id}`, para - 600000);
          dbs.set(`blackmarket_${message.author.id}`, Date.now());
          client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı black marketten \`ak47\` satın aldı. Geriye **${para - 600000}**$ kaldı.`)
        }
      }
      
      if(args[0] === "pompalı"){
        if(para < 750000){
message.reply("`pompalı` almak için 750000 $ ihtiyacın var. Senin paran: **" +para + "**")
        }
        if(para > 750000){
          message.reply(`Black Marketten **1** adet \`pompalı\` aldın. Şuanki paran: ${para - 750000}`)
          await db.add(`${message.author.id}.pompalı_adet`, 1)
          await db.set(`bakiye_${message.author.id}`, para - 750000)
         dbs.set(`blackmarket_${message.author.id}`, Date.now());
          client.channels.cache.get(soygunlog).send(`**${message.author.tag}**, Adlı kullanıcı black marketten \`pompalı\` satın aldı. Geriye **${para - 750000}** $ kaldı.`)
        }
      }
      
      
    }
}
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    katagori: "Ekonomi"
}

exports.help = {
    name: 'blackmarket',
    description: 'Günlük para alırsınız.',
    usage: 'param'
}