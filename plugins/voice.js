client.on('message', async msg => {
    if (msg.body === '.alive') {
        const voiceMessage = fs.readFileSync('Media/alive.mp3'); // Replace with the path to your voice file
        await client.sendMessage(msg.from, voiceMessage, { sendAudioAsVoice: true });
    }
});

// Initialize the client
client.initialize();
