const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        
        // Send voice message
        await conn.sendMessage(from, { audio: { url: config.ALIVE_AUDIO }, mimetype: 'audio/mp4' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "menu",
    desc: "Show menu options.",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Send voice message for menu
        await conn.sendMessage(from, { audio: { url: config.MENU_AUDIO }, mimetype: 'audio/mp4' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
