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
await conn.sendMessage(from,{img:{url: data.thumbnail},caption:desc},{quoted:mek});

                       //download audio
let download = await fg.yta(url)
let downloadUrl + down.dl_url
                     //send + doc audio
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName: data.title + "mp3",caption:"කැප්ශන් එක"},{quoted:mek})

  
}catch(e){
  console.log(e)
  reply(`${e}`)
}
})


//=========================video + doc dl=======================

cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  if(!q) return reply("නමක් හරි url හරි දෙන්න")
  const search = await yts(q)
  const data = search.video[0];
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
await conn.sendMessage(from,{img:{url: data.thumbnail},caption:desc},{quoted:mek});

                       //download video
let download = await fg.ytv(url)
let downloadUrl + down.dl_url
                     //send + doc video
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName: data.title + "mp4",caption:"කැප්ශන් එක"},{quoted:mek})


  
}catch(e){
  console.log(e)
  reply(`${e}`)
}
})
