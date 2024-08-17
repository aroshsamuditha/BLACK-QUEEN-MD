const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/vX31j64/BLACK-QUEEN.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*ඉන්නව ඉන්නවා තාම පණපිටින් 💭✅*\n\n*👸🏻BLACK QUEEN 🖤🪄*\n`create by Arosh Samuditha`\n\n```Contact Owner:-```\nhttps://wa.me/94761676948?text=*Hellow+Arosh+😁🩷*\n\n🔖අපගේ අනෙකුත් Updates ගැන දැනගැනීමට පහත link වෙත පිවිසෙන්න 🔗\n\n*+ Cool Art Graphic🔗*\n> https://chat.whatsapp.com/FRsIjml10CWAX7NAPF7xIb\n*+ Black Queen Bot Group🔗*\n> https://chat.whatsapp.com/IT6mjqGINN6LaLSKnTZd6r\n*+ FaceBook🔗*\n> https://www.facebook.com/profile.php?id=61550302625124&mibextid=ZbWKwL\n\n*© ʙʟᴀᴄᴋ Qᴜᴇᴇɴ ʙʏ ᴀʀᴏꜱʜ ꜱᴀᴍᴜᴅɪᴛʜᴀ*",
//ALIVE_AUDIO: process.env.ALIVE_AUDIO || "https://github.com/aroshsamuditha/BLACK-QUEEN-MD/raw/4c4aabe9d380b3bcf858a270e30b9fe8e90ce615/Media/alive.mp3",
    
};
