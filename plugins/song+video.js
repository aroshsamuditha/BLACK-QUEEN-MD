const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

  cmd({
    pattern: "song",
    desc: "download song",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if(!q) return reply("නමක් හරි url හරි දෙන්න")
  const search = await yts(q)
  const data = search.videos[0];
  const url = data.url
  
  let desc = '
    බොට් ගෙ නම
  
  
  title: ${data.title}
  description ${data.description}
  time: ${data.time}
  ago: ${data.ago}
  views: ${data.views}
  
කැප්ශන් එක
'
await conn.sendMessage(from,{img:{url: data.thumbnail},caption:desc},{quoted:mek}

                       //download audio
let download = await fg.yta(url)
let downloadUrl + down.dl_url
                     //send audio
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})


  
}catch(e){
  console.log(e)
  reply('${e}')
}
})
