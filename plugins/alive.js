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
return await conn.sendMessage(from,{voice: {url: "https://github.com/aroshsamuditha/BLACK-QUEEN-MD/blob/e9aa03e4658176b5ba99e6387f72ae3a31d89b78/Media/alive.mp3"},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
