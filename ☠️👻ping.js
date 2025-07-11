```js
module.exports = {
  command: "ping",
  run: async (sock, msg) => {
    await sock.sendMessage(msg.key.remoteJid, { text: "🏓 Pong! Bot iko hewani." });
  }
};
```￼Enter
