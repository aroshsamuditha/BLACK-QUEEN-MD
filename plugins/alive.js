const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
    await conn.sendMessage(from, { audio: { url: 'path/to/alive_audio.mp3' }, mimetype: 'audio/mp4' }, { quoted: mek });
//return await conn.sendMessage(from,{audio: {url: config.ALIVE_AUDIO},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
