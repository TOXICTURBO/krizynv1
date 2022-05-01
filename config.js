// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = 'https://instagram.com/toxic-turbo777'
gc2 = 'https://www.youtube.com/c/TurboMods'
gc3 = 'https://githun.com/TURBOHYPER'
global.linkGC = ['https://chat.whatsapp.com/LWjJ4tu2qe9BWQZ1JzRZgp', ''] // ganti jadi group lu
global.owner = ['916380260672','919995801023'] // Put your number here //owner eval
global.kontak = ['916380260672','919995801023'] //Ketika ada yang ngetik #owner
global.mods = ['916380260672','919995801023'] // Want some help?
global.prems = ['916380260672','919995801023'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  hardianto: 'https://hardianto-chan.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  bx: 'https://bx-hunter.herokuapp.com',

}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'APIKEY',
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'nyyxz-bot',
  'https://api.lolhuman.xyz': 'ed6c4f2c72b6f92f7d201464',
  'https://api.vhtear.com': 'sayahafiz',
  'https://fxc7-api.herokuapp.com': 'uN8rsK4g',
  'https://api.justaqul.xyz': '5kbUqdG00OXelFYx',
  'http://zekais-api.herokuapp.com': 'grqgD6pU',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'toxic_turbo777 :)'
namagithub = 'TURBOHYPER'
kasihcaption = `*If you have given it, what do you say?*`
namakontak1 = 'Turbo Mods'
namakontak2 = 'Turbo Mods'

//kasihcaption = `Kalau udah dikasih, bilang apa?`

// Sticker WM
global.packname = 'Turbo Mods' // ganti aja
global.author = 'Turbo Mods' // ganti aja

//yyy
'𝙆𝙧𝙞𝙯𝙮𝙣×͜×' // Broadcast
footer = 'Turbo Mods' // Broadcast
footer = 'Turbo Mods'
namabot = 'Turbo Mods'
namalu = 'Turbo Mods'


// 
wait = '⏳being processed...'
global.wait = '⏳being processed...'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/LWjJ4tu2qe9BWQZ1JzRZgp'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '❗𝙎𝙚𝙧𝙫𝙚𝙧 𝙀𝙧𝙧𝙤𝙧...'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.watermark = 'Turbo Mods ' //change the watermark 
global.image = 'https://telegra.ph/file/56c7adc490d2797f7efc6.jpg' //change the image
global.thumbfoto = 'https://telegra.ph/file/56c7adc490d2797f7efc6.jpg'

// image
global.bank = 'https://telegra.ph/file/56c7adc490d2797f7efc6.jpg'
global.kandang = 'https://telegra.ph/file/56c7adc490d2797f7efc6.jpg'
global.kolam = 'https://telegra.ph/file/56c7adc490d2797f7efc6.jpg'
global.thanks = 'https://telegra.ph/file/56c7adc490d2797f7efc6.jpg'

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 100 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
