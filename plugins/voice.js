client.on('message', async msg => {
    if (msg.body === '.alive') {
        const voiceMessage = fs.readFileSync('path/to/voice/file.ogg'); // Replace with the path to your voice file
        await client.sendMessage(msg.from, voiceMessage, { sendAudioAsVoice: true });
    }
});

// Initialize the client
client.initialize();
