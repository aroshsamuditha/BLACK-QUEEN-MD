const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://i.ibb.co/jLWfBj3/BLACK-QUEEN.png' },
    { key: 'ALIVE_MSG', value: '*ඉන්නව ඉන්නවා තාම පණපිටින් 💭✅*\n\n*👸🏻BLACK QUEEN 🖤🪄*\n`create by Arosh Samuditha`\n\n```Contact Owner:-```\nhttps://wa.me/94761676948?text=*Hellow+Arosh+😁🩷*\n\n🔖අපගේ අනෙකුත් Updates ගැන දැනගැනීමට පහත link වෙත පිවිසෙන්න 🔗\n\n*+ Cool Art Graphic🔗*\n> https://chat.whatsapp.com/FRsIjml10CWAX7NAPF7xIb\n*+ Black Queen Bot Group🔗*\n> https://chat.whatsapp.com/IT6mjqGINN6LaLSKnTZd6r\n*+ FaceBook🔗*\n> https://www.facebook.com/profile.php?id=61550302625124&mibextid=ZbWKwL\n\n*© ʙʟᴀᴄᴋ Qᴜᴇᴇɴ ʙʏ ᴀʀᴏꜱʜ ꜱᴀᴍᴜᴅɪᴛʜᴀ*' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'AUTO_STICKER', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
